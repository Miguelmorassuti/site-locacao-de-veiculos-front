import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Card from "../../../../components/Card";

const StandartVehicleOptionsBox = () => {
  // Exemplo de um array com múltiplos Cards
  const cards = Array.from({ length: 8 }, (_, index) => <Card key={index} />);

  const [data, setData] = useState([]);

  useEffect(() => {
    // Exemplo de requisição a uma API pública
    fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((response) => response.json())
      .then((data) => {
        setData(data.results); // Armazenando os dados no estado
      })
      .catch((error) => console.error("Erro ao buscar dados da API:", error));
  }, []);

  console.log(data);

  return (
    <Box width="100%">
      <Typography textAlign="center" variant="h4" marginY={5}>
        Suas reservas
      </Typography>
      <Box display="flex" justifyContent="center" width="100%">
        <Grid container spacing={1}>
          {cards.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              key={card.key}
              marginInline={9}
            >
              {card}
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default StandartVehicleOptionsBox;
