import * as yup from "yup";

const schema = yup.object({
  fullName: yup.string().required("Por favor! Insira seu nome!"),

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

  email: yup.string().required("Por favor! Insira seu Email!"),
});

export default schema;
