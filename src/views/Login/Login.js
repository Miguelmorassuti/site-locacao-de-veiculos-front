import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";

import styled from "@emotion/styled";
import { Container } from "@mui/system";
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
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      user: "",
      password: "",
    },
  });

  const [data, setData] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    return setData(data);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            name="user"
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
            <Controller
              name="checkbox"
              control={control}
              render={({ field }) => <Checkbox {...field} label="test" />}
            />
            <FormLabelCustom>Lembrar de mim</FormLabelCustom>
          </Box>
          <Box>
            <ButtonSubmit
              variant="contained"
              onClick={handleClickOpen}
              type="submit"
            >
              Entrar
            </ButtonSubmit>
            <Dialog
              open={data.user !== undefined ? open : false}
              onClose={handleClose}
              sx={{ backgroundColor: "#590202" }}
            >
              <DialogTitle id="alert-dialog-title">Bem vindo!</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Para acessar click no botão acessar
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} autoFocus>
                  <Links to="/vehicle">Acessar</Links>
                </Button>
              </DialogActions>
            </Dialog>
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
    </ContainerBody>
  );
};

export default Login;
