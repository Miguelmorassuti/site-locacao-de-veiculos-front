import { Grid } from "@mui/material";
import Topbar from "../../components/Topbar";
import Footer from "../../components/Footer";
import VehicleDetailsBox from "./components/VehicleDetailsBox";

const Vehicle = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Topbar />
      </Grid>
      <Grid item xs={12}>
        <VehicleDetailsBox />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default Vehicle;
