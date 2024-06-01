import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("Por favor! Insira seu nome!"),

  password: yup
    .string()
    .required("Por favor! Insira sua senha")
    .min(8, "Senha precisa ter ao menos 8 caracteres!")
    .matches(/[a-z]/, "Senha deve conter pelo menos uma letra minúscula!")
    .matches(/[A-Z]/, "Senha deve conter pelo menos uma letra maiúscula!")
    .matches(/\d/, "Senha deve conter pelo menos um número!")
    .matches(
      /[@$!%*?&#]/,
      "Senha deve conter pelo menos um caractere especial!"
    ),

  cpf: yup.string().required("Por favor! Insira seu CPF!"),

  address: yup.string().required("Por favor! Insira seu CPF!"),

  telephone: yup.string().required("Por favor! Insira seu CPF!"),
});

export default schema;
