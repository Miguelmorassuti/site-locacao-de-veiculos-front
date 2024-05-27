import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Jadim Botânico – Curitiba, Brasil",
    imgPath:
      "https://magazine.zarpo.com.br/wp-content/uploads/2018/09/jardim-botanico-de-curitiba_parana_zarpo.jpg",
  },
  {
    label: "Lençois Maranhenses - Maranhão, Brasil",
    imgPath:
      "https://magazine.zarpo.com.br/wp-content/uploads/2019/03/lencois-maranhenses_zarpo.jpg",
  },
  {
    label: "Teatro Amazonas, Manaus, Brasil",
    imgPath:
      "https://www.melhoresdestinos.com.br/wp-content/uploads/2017/11/manaus-teatro-amazonas-820x500.jpg",
  },
  {
    label: "Av Paulista, São Paulo, Brasil",
    imgPath:
      "https://www.melhoresdestinos.com.br/wp-content/uploads/2020/07/avenida-paulista-820x547.jpg",
  },
];

function TravelRecommendationBox() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box bgcolor="#cccccc" padding={2} marginTop={10}>
      <Box>
        <Typography variant="h4" textAlign="center">
          Destinos para descobrir e se inspirar
        </Typography>
        <Typography textAlign="center">
          Mais do que alugar carros, nós cuidamos do seu caminho. Confira as
          nossas dicas de viagem para inspirar sua próxima experiência.
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: 800,
          flexGrow: 1,
          margin: "auto",
          marginY: 8,
          boxShadow: "1px solid black",
        }}
      >
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            height: 50,
            pl: 2,
            bgcolor: "#590202",
            color: "#fff",
            borderRadius: "15px 15px 0px 0px",
          }}
        >
          <Typography variant="h6">{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: 400,
                    display: "block",
                    maxWidth: 800,
                    overflow: "hidden",
                    width: "100%",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          sx={{ backgroundColor: "#590202" }}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              variant="outlined"
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              variant="outlined"
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
}

export default TravelRecommendationBox;
