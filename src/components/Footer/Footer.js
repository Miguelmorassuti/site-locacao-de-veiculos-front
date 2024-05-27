import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Stack } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // minHeight: "100vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#222222",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box>
          <Box display="flex" spacing={2} color="white" marginY={2}>
            <Stack direction="row" spacing={2}>
              <Typography>Serviços</Typography>
              <Typography>Empresas</Typography>
              <Typography>Suporte</Typography>
              <Typography>Políticas</Typography>
            </Stack>
          </Box>

          <Box display="flex" justifyContent="center" marginY={2} color="white">
            <Stack direction="row" spacing={2}>
              <XIcon />
              <InstagramIcon />
              <FacebookIcon />
              <LinkedInIcon />
            </Stack>
          </Box>

          <Typography variant="body2" color="white" textAlign="center">
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
              MVW Veículos
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
