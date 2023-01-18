import ButtonPrimary from "@/components/button/primary";
import InputEmail from "@/components/input/email";
import InputPassword from "@/components/input/password";
import { env } from "@/config/env";
import Link from "next/link";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AuthContext } from "@/contexts/auth-context";
import { useContext } from "react";

export default function LoginForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const { signIn } = useContext(AuthContext);

  const onSubmit = async (data: any) => {
    await signIn(data);
    reset();
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold font-serif mb-4 text-center">
        Entrar
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-min flex flex-col gap-4"
      >
        <InputEmail required register={register} erros={errors} />
        <InputPassword required register={register} erros={errors} />
        <div className="flex place-content-between gap-4">
          <ButtonPrimary type="submit" className="m-auto w-32">
            Entrar
          </ButtonPrimary>
        </div>
      </form>

      <span className="flex h-0.5 bg-gray-200 mt-4 mb-2"></span>
      <span className="text-xs flex flex-col gap-1 place-content-center place-items-center">
        <span className="text-gray-400">É novo por aqui ?</span>
        <Link href="/signup" className="text-sky-500 hover:text-sky-400">
          Criar Conta
        </Link>
      </span>
    </div>
  );
}
