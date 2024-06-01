import React from "react";
import { Box, Typography, styled } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AdvantageCard = styled(Box)({
  backgroundColor: "#262626",
  color: "white",
  borderRadius: 8,
  backgroundSize: "100% 100%",
  backgroundPosition: "center",
  marginTop: "50px",
  width: "500px",
  textAlign: "center",
  padding: "10px",
  opacity: 0.8,
});

const BackgroundBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url('/images/carAccount.jpg')",
  height: "100vh",
  backgroundSize: "100% 100%",
});

const BenefitsBox = () => {
  return (
    <BackgroundBox
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box marginTop={5}>
        <Typography variant="h4" color="white">
          Dirija com a maior
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6" color="white">
          MVW Veículos
        </Typography>
      </Box>
      <AdvantageCard>
        <Box padding={2}>
          <Typography variant="h5">Conheça nossas vantagens!</Typography>
        </Box>
        <Box
          marginTop={2}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <ArrowForwardIosIcon fontSize="small" color="white" />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Frota Variada e Atualizada:
          </Typography>
        </Box>
        <Typography>
          Disponibilizamos uma ampla gama de veículos, desde carros compactos
          até SUVs de luxo.
        </Typography>

        <Box
          marginTop={2}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <ArrowForwardIosIcon fontSize="small" color="white" />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Preços Competitivos:
          </Typography>
        </Box>
        <Typography>
          Oferecemos tarifas de locação altamente competitivas, com opções
          flexíveis de pagamento e sem taxas ocultas.
        </Typography>

        <Box
          marginTop={2}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <ArrowForwardIosIcon fontSize="small" color="white" />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Atendimento 24/7:
          </Typography>
        </Box>
        <Typography>
          Nosso serviço de atendimento ao cliente está disponível 24 horas por
          dia, 7 dias por semana, para garantir que suas necessidades sejam
          atendidas a qualquer momento.
        </Typography>

        <Box
          marginTop={2}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <ArrowForwardIosIcon fontSize="small" color="white" />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Seguro Inclusivo:
          </Typography>
        </Box>
        <Typography>
          Todos os nossos veículos vêm com seguro básico incluído,
          proporcionando maior tranquilidade aos nossos clientes durante a
          locação.
        </Typography>

        <Box
          marginTop={2}
          display="flex"
          justifyContent={"center"}
          alignItems="center"
        >
          <ArrowForwardIosIcon fontSize="small" color="white" />
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Aluguel Fácil e Rápido:
          </Typography>
        </Box>
        <Typography>
          Processo de locação simplificado com a opção de reserva online,
          garantindo uma experiência rápida e conveniente.
        </Typography>
      </AdvantageCard>
    </BackgroundBox>
  );
};

export default BenefitsBox;
