import React from "react";
import { Box, styled } from "@mui/material";

const BackgroundBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  backgroundImage: "url('/images/reservation.png')",
  height: 600,
  backgroundSize: "100% 100%",
});

const ReservationBanner = () => {
  return (
    <BackgroundBox paddingX={5}>
      <Box display="flex" justifyContent="center"></Box>
    </BackgroundBox>
  );
};

export default ReservationBanner;
