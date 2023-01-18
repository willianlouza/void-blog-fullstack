import ButtonPrimary from "@/components/button/primary";
import InputEmail from "@/components/input/email";
import InputName from "@/components/input/name";
import InputPassword from "@/components/input/password";
import { env } from "@/config/env";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { api } from "@/api/api";
import { setCookie } from "nookies";
import { useContext } from "react";
import { AuthContext } from "@/contexts/auth-context";

export default function RegisterForm() {
  const { signUp } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data: any) => {
    await signUp(data) 
    reset();
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold font-serif mb-4 text-center">
        Criar conta
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-min flex flex-col gap-4"
      >
        <InputName
          required
          register={register}
          erros={errors}
          name="fullName"
        />
        <InputEmail required register={register} erros={errors} name="email" />
        <InputPassword
          required
          register={register}
          erros={errors}
          name="password"
          validate
        />
        <div className="flex place-content-between gap-4">
          <ButtonPrimary type="submit" className="m-auto w-32">
            Criar
          </ButtonPrimary>
        </div>
      </form>

      <span className="flex h-0.5 bg-gray-200 mt-4 mb-2"></span>
      <span className="text-xs flex flex-col gap-1 place-content-center place-items-center">
        <span className="text-gray-400">Já possui conta ?</span>
        <Link href="/login" className="text-sky-500 hover:text-sky-400">
          Entrar
        </Link>
      </span>
    </div>
  );
}
