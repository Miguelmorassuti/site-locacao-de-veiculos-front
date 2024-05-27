import { Box, Grid } from "@mui/material";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import StandartVehicleOptionsBox from "./components/StandartVehicleOptionsBox/StandartVehicleOptionsBox";
import TravelRecommendationBox from "./components/TravelRecommendationBox";

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Topbar />
      </Grid>
      <Grid item xs={12}>
        <StandartVehicleOptionsBox />
      </Grid>
      <Grid item xs={12}>
        <TravelRecommendationBox />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Home;
