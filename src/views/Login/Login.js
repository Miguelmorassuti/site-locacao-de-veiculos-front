import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

import styled from "@emotion/styled";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

import schema from "./schema";

import { yupResolver } from "@hookform/resolvers/yup";
import CustomSnackbar from "../../components/CustomSnackbar";

const ContainerBody = styled(Box)({
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundImage: "url('/images/carLogin.jpg')",
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  backgroundColor: "#000",
  overflow: "hidden",
  margin: 0,
});

const BoxBackground = styled(Box)({
  backgroundColor: "#262626",
  padding: "30px",
  borderRadius: "20px",
  opacity: "0.9",
});

const BoxIcon = styled(Box)({
  backgroundColor: "#590202",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
});

const BoxUtilities = styled(Box)({
  marginBlock: "20px",
  display: "flex",
  justifyContent: "space-between",
});

const Links = styled(Link)({
  fontFamily: "roboto",
  textDecoration: "none",
  color: "gray",
  padding: "5px",
  "&:hover": {
    backgroundColor: "#590202",
    color: "white",
    borderRadius: "2px",
    transition: "0.8s",
  },
});

const ButtonSubmit = styled(Button)({
  width: "100%",
  backgroundColor: "#590202",
  "&:hover": { backgroundColor: "#8C0303" },
});

const FormLabelCustom = styled(FormLabel)({
  color: "white",
});

const Login = () => {
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      await axios.post("http://localhost:8080/auth/login", data);
      navigate("/vehicle");
    } catch (error) {
      console.error("Error logging in:", error);
      setSnackbarMessage("Erro ao fazer login.");
      setIsSuccess(false);
    } finally {
      setOpenSnackbar(true);
      setTimeout(() => {
        setIsSubmitting(false);
      }, 5000); // Espera 5 segundos antes de permitir outra tentativa
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <ContainerBody>
      <BoxBackground>
        <BoxIcon>
          <VpnKeyIcon fontSize="large" sx={{ color: "white" }} />
        </BoxIcon>
        <form
          style={{ display: "flex", flexDirection: "column", width: "400px" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <FormLabelCustom>Usuário*</FormLabelCustom>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                helperText={errors.user?.message}
                error={!!errors.user}
              />
            )}
          />
          <FormLabelCustom>Senha*</FormLabelCustom>
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
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox disabled />
            <FormLabelCustom>Lembrar de mim</FormLabelCustom>
          </Box>
          <Box>
            <ButtonSubmit
              variant="contained"
              type="submit"
              disabled={isSubmitting}
            >
              Entrar
            </ButtonSubmit>
          </Box>
          <BoxUtilities>
            <Links href="#">Esqueci a senha</Links>
            <Links to="/createAccount">Criar sua conta</Links>
          </BoxUtilities>
          <Typography
            variant="caption"
            sx={{ alignSelf: "center", color: "#fff" }}
          >
            Todos os direitos reservados © WMV Group
          </Typography>
        </form>
      </BoxBackground>
      <CustomSnackbar
        open={openSnackbar}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        isSuccess={isSuccess}
      />
    </ContainerBody>
  );
};

export default Login;
