import { UseFormRegister, FieldValues } from "react-hook-form";

interface IProps {
  name?: string;
  label?: string;
  register: UseFormRegister<FieldValues>;
  erros: any;
  required?: boolean;
}
export default function InputEmail(props: IProps) {
  const {
    required = false,
    name = "email",
    label = "E-mail",
    erros,
    register,
  } = props;

  return (
    <div>
      <input
        {...register(name, {
          required: "Informe seu e-mail",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Insira um e-mail válido",
          },
        })}
        type="text"
        name={name}
        id={name}
        placeholder={`${label}${required ? "*" : ""}`}
        className={`${
          erros[name] ? "border-red-500 dark:border-red-500 text-red-500 dark:text-red-500" : ""
        } rounded-md border border-black/30 focus:border-black bg-white dark:bg-black dark:border-white/30 focus:dark:border-white transition-colors duration-100 p-4`}
      />
      {erros && <p className="text-red-500 text-sm">{erros[name]?.message}</p>}
    </div>
  );
}
