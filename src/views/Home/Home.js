import { Box, Grid } from "@mui/material";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import StandartVehicleOptionsBox from "./components/StandartVehicleOptionsBox/StandartVehicleOptionsBox";
import TravelRecommendationBox from "./components/TravelRecommendationBox";
import Announcement from "./components/Announcement";

const Home = () => {
  return (
    <Grid container width="100%">
      <Grid item xs={12}>
        <Topbar />
      </Grid>
      <Grid item xs={12}>
        <Announcement />
      </Grid>
      <Grid item xs={12} width="100%">
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
