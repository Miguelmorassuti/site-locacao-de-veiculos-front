import * as React from "react";
import { useNavigate } from "react-router-dom"; // Importe useNavigate aqui
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

const CardProduct = ({ cardData }) => {
  const navigate = useNavigate(); // Use useNavigate para navegação

  const handleClick = (id) => {
    navigate(`/Vehicle/${id}`); // Navegue para a rota desejada usando navigate
  };

  console.log(cardData);

  const ButtonMoreInformation = styled(Button)({
    backgroundColor: "#111",
    "&:hover": { backgroundColor: "#444" },
  });

  return (
    <Card sx={{ width: 370 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="https://w7.pngwing.com/pngs/131/765/png-transparent-hyundai-car-chevrolet-prisma-sport-utility-vehicle-hyundai-compact-car-sedan-car.png"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardData?.model} - {cardData?.brand}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          sx={{ color: "#000" }}
          size="small"
          variant="outlined"
          onClick={() => handleClick(cardData?.id)}
        >
          {cardData?.rentPrice}/Dia
        </Button>
        <ButtonMoreInformation
          size="small"
          variant="contained"
          color="warning"
          onClick={() => handleClick(cardData?.id)}
        >
          Ver mais informações
        </ButtonMoreInformation>
      </CardActions>
    </Card>
  );
};

export default CardProduct;
