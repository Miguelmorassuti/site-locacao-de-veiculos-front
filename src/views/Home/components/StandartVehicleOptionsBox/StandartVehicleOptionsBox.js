import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Card from "../../../../components/Card";
import axios from "axios";

const StandartVehicleOptionsBox = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    axios
      .get("/vehicles")
      .then((response) => setVehicles(response.data))
      .catch((error) => console.error("Error fetching vehicles:", error));
  }, []);

  return (
    <Box width="100%">
      <Typography textAlign="center" variant="h4" marginY={5}>
        Alguns de nossos modelos
      </Typography>
      <Box display="flex" justifyContent="center" width="100%">
        <Grid container spacing={1}>
          {/* Mapeia cada veículo para um Card */}
          {vehicles.map((vehicle) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              key={vehicle.id}
              marginInline={9}
            >
              <Card key={vehicle.id} cardData={vehicle} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default StandartVehicleOptionsBox;
