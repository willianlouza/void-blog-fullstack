import { type } from "os";
import { useState } from "react";
import { UseFormRegister, FieldValues } from "react-hook-form";
import { BsEyeSlash, BsEye } from "react-icons/bs";
interface IProps {
  name?: string;
  label?: string;
  register: UseFormRegister<FieldValues>;
  erros: any;
  required?: boolean;
  validate?: boolean;
}
export default function InputPassword(props: IProps) {
  const {
    required = false,
    name = "password",
    label = "Senha",
    erros,
    register,
    validate = false,
  } = props;
  const [type, setType] = useState("password");

  const validationSchema = {
    required: "Escolha uma senha",
    pattern: {
      value: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/,
      message:
        "A senha precisa conter 8 caracteres, pelo menos 1 letra maiúscula, 1 letra minúscula e 1 numero.",
    },
  };

  return (
    <div className="relative">
      <div
        className={`${
          erros[name] ? "border-red-500 dark:border-red-500 text-red-500 dark:text-red-500" : ""
        } rounded-md border border-black/30 focus:border-black bg-white dark:bg-black dark:border-white/30 focus:dark:border-white transition-colors duration-100 p-4`}
      >
        <input
          {...register(name, validate ? validationSchema : {required: "Informe a senha"})}
          type={type}
          name={name}
          id={name}
          placeholder={`${label}${required ? "*" : ""}`}
          className="w-5/6 bg-transparent"
        />
        <button
          type="button"
          className="absolute right-4 top-4"
          onClick={() => setType(type === "password" ? "text" : "password")}
        >
          {type === "password" ? (
            <BsEyeSlash className="w-6 h-6" />
          ) : (
            <BsEye className="w-6 h-6" />
          )}
        </button>
      </div>
      {erros && <p className="text-red-500 text-sm">{erros[name]?.message}</p>}
    </div>
  );
}
