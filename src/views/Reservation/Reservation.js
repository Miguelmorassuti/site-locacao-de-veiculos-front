import { Box, Grid } from "@mui/material";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import StandartVehicleOptionsBox from "./components/StandartVehicleOptionsBox/StandartVehicleOptionsBox";
import ReservationBanner from "./components/ReservationBanner";

const Reservation = () => {
  return (
    <Grid container width="100%">
      <Grid item xs={12}>
        <Topbar />
      </Grid>
      <Grid item xs={12}>
        <ReservationBanner />
      </Grid>
      <Grid item xs={12} width="100%">
        <StandartVehicleOptionsBox />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Reservation;
