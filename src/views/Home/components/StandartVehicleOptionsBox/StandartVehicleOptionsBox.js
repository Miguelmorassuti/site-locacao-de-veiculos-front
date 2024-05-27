import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import Card from "../../../../components/Card";

const StandartVehicleOptionsBox = () => {
  // Exemplo de um array com múltiplos Cards
  const cards = Array.from({ length: 8 }, (_, index) => <Card key={index} />);

  return (
    <Box paddingX={5}>
      <Typography textAlign="center" variant="h4" marginY={5}>
        Aluguéis de carros baratos em São Paulo
      </Typography>
      <Box display="flex" justifyContent="center">
        <Grid container spacing={10}>
          {/* Mapeia cada card para uma coluna dentro do grid */}
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2} key={card.key}>
              {card}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default StandartVehicleOptionsBox;
