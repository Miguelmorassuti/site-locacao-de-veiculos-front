import React from "react";
import { Grid } from "@mui/material";
import { BenefitsBox, UserCreationForm } from "./components";

const CreateAccount = () => {
  return (
    <Grid container>
      <Grid item xs={6}>
        <BenefitsBox />
      </Grid>
      <Grid item xs={6}>
        <UserCreationForm />
      </Grid>
    </Grid>
  );
};

export default CreateAccount;
