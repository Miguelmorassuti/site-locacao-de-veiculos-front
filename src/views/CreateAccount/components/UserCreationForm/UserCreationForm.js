import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      fullName: "",
      password: "",
      email: "",
    },
  });

  const [data, setData] = useState([]);

  const onSubmit = async (data) => {
    try {
      console.log(data);
      const response = await axios.post(
        "http://localhost:8080/auth/signup",
        data
      );

      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error);
    }
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
          name="fullName"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              helperText={errors.fullName?.message}
              error={!!errors.fullName}
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
          <FormLabel>EMAIL *</FormLabel>
          <Controller
            name="email"
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
