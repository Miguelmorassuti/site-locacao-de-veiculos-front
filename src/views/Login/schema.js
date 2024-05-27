import * as yup from "yup";

const schema = yup.object({
  user: yup.string().required("Por favor! Insira seu login!"),

  password: yup
    .string()
    .required("Por favor! Insira sua senha")
    .min(8, "Senha precisa ter ao menos 8 caracteres!"),
});

export default schema;
