import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  Box,
  TextField,
  FormLabel,
  styled,
  Button,
  Checkbox,
} from "@mui/material";
import schema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

const ButtonSubmit = styled(Button)({
  width: "100%",
  marginTop: 16,
  backgroundColor: "#000",
  "&:hover": { backgroundColor: "#333" },
});

const UserCreationForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      password: "",
      cpf: "",
      address: "",
      telephone: "",
    },
  });

  const [data, setData] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    return setData(data);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      height="100%"
      alignItems="center"
    >
      <form
        style={{ display: "flex", flexDirection: "column", width: "400px" }}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormLabel>NOME *</FormLabel>
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText={errors.name?.message}
              error={!!errors.name}
            />
          )}
        />
        <Box display="flex" flexDirection="column" marginTop={2}>
          <FormLabel>SENHA *</FormLabel>
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                helperText={errors.password?.message}
                error={!!errors.password}
                type="password"
              />
            )}
          />
        </Box>

        <Box display="flex" flexDirection="column" marginTop={2}>
          <FormLabel>CPF *</FormLabel>
          <Controller
            name="cpf"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                helperText={errors.cpf?.message}
                error={!!errors.cpf}
              />
            )}
          />
        </Box>

        <Box display="flex" flexDirection="column" marginTop={2}>
          <FormLabel>ENDEREÇO *</FormLabel>
          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                helperText={errors.address?.message}
                error={!!errors.address}
              />
            )}
          />
        </Box>

        <Box display="flex" flexDirection="column" marginTop={2}>
          <FormLabel>TELEFONE *</FormLabel>
          <Controller
            name="telephone"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                helperText={errors.telephone?.message}
                error={!!errors.telephone}
              />
            )}
          />
        </Box>

        <Box display="flex" alignItems="center" marginTop={2}>
          <Checkbox />
          <FormLabel>Eu li e concordo com os termos de uso</FormLabel>
        </Box>

        <Box>
          <ButtonSubmit
            variant="contained"
            // onClick={handleClickOpen}
            type="submit"
          >
            Criar conta
          </ButtonSubmit>
        </Box>
      </form>
    </Box>
  );
};

export default UserCreationForm;
