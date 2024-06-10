import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import axios from "axios";
import { useParams } from "react-router-dom";

import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import VehicleDetailsBox from "./components/VehicleDetailsBox";

const Vehicle = () => {
  const { id } = useParams();

  const [vehicle, setVehicle] = useState(null);

  useEffect(() => {
    const fetchVehicle = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/vehicles/${id}`
        );
        setVehicle(response.data);
      } catch (error) {
        console.error("Error fetching vehicle:", error);
      }
    };

    fetchVehicle();
  }, [id]);

  if (!vehicle) {
    return <p>Carregando...</p>;
  }

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid item xs={12}>
        <Topbar />
      </Grid>
      <Grid item xs={12}>
        <VehicleDetailsBox vehicle={vehicle} />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Vehicle;
