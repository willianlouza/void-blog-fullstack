import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { parseCookies, setCookie, destroyCookie } from "nookies";
import { env } from "@/config/env";
import { useRouter } from "next/navigation";
import { api } from "@/api/api";

type AuthContextType = {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
  logout: () => void;
  signUp: (data: RegisterData) => Promise<void>;
};
type SignInData = {
  email: string;
  password: string;
};
type RegisterData = {
  fullName: string;
  email: string;
  password: string;
};
type User = {
  id: number;
  fullName: string;
  email: string;
  photo: string;
};
export const AuthContext = createContext({} as AuthContextType);

interface IProps {
  children: React.ReactNode;
}
export function AuthProvider(props: IProps) {
  const router = useRouter();
  const { children } = props;
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  useEffect(() => {
    const { "nextblog.token": token } = parseCookies();
    if (token) {
      api
        .get("/profile/details")
        .then((res) => {
          setUser(res.data.user);
        })
        .catch((err) => {
          router.push("/login", { forceOptimisticNavigation: true });
        });
    } else {
      router.push("/login");
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    axios
      .post("/auth/login", { email, password }, { baseURL: env.API_URL })
      .then((res) => {
        const { token, user } = res.data;
        setCookie(undefined, "nextblog.token", token, {
          maxAge: 60 * 60 * 24 * 7 * 4 * 1, // 1 Mes
        });
        setUser(user);
        router.refresh();
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }

  async function signUp({ fullName, email, password }: RegisterData) {
    const photo =
      "https://res.cloudinary.com/dsd9hrqmo/image/upload/v1670164808/user_mzard4.png";
    api
      .post("/auth/signup", { fullName, email, password, photo })
      .then((res) => {
        const { token, user } = res.data;
        setCookie(undefined, "nextblog.token", token, {
          maxAge: 60 * 60 * 24 * 7 * 4 * 1, // 1 Mes
        });
        setUser(user);
        router.refresh();
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }

  function logout() {
    destroyCookie(undefined, "nextblog.token");
    setUser(null);
    router.push("/login");
  }

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, signIn, logout, signUp: signUp }}
    >
      {children}
    </AuthContext.Provider>
  );
}
