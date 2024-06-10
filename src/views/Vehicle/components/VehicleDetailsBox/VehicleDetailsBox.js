import React, { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  FormLabel,
  styled,
  Button,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { ReviewsList } from "./components";

const VehicleDetailsBox = ({ vehicle }) => {
  const ButtonSubmit = styled(Button)({
    width: "100%",
    marginTop: 16,
    backgroundColor: "#000",
    "&:hover": { backgroundColor: "#333" },
  });

  console.log(vehicle);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
    defaultValues: {
      location: "",
      withdrawal: "",
      devolution: "",
      price: vehicle?.rentPrice || "",
    },
  });

  const [data, setData] = useState([]);

  const onSubmit = (data) => {
    console.log(data);
    return setData(data);
  };

  return (
    <Grid container paddingInline={3}>
      <Grid item xs={6}>
        <img
          src="https://w7.pngwing.com/pngs/131/765/png-transparent-hyundai-car-chevrolet-prisma-sport-utility-vehicle-hyundai-compact-car-sedan-car.png"
          alt="Vehicle"
        />
        <Box marginY={2}>
          <Typography variant="h4">
            {vehicle?.model} - {vehicle?.brand}
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet. Est aliquid praesentium vel quia enim
            qui reiciendis similique. Ut dignissimos internos quo deserunt animi
            rem consequatur temporibus ut architecto galisum sit esse distinctio
            et deserunt cumque sit aspernatur consectetur. Id nihil autem aut
            vitae veritatis qui eveniet repellendus ut porro doloremque.
          </Typography>
        </Box>

        <ReviewsList />
      </Grid>
      <Grid item xs={6}>
        <Box
          display="flex"
          justifyContent="center"
          height="100%"
          alignItems="center"
        >
          <form
            style={{ display: "flex", flexDirection: "column", width: "400px" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormLabel>LOCALIZAÇÃO *</FormLabel>
            <Controller
              name="location"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  helperText={errors.name?.message}
                  error={!!errors.name}
                />
              )}
            />
            <Box display="flex" flexDirection="column" marginTop={2}>
              <FormLabel>DATA DE RETIRADA *</FormLabel>
              <Controller
                name="withdrawal"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    helperText={errors.password?.message}
                    error={!!errors.password}
                  />
                )}
              />
            </Box>

            <Box display="flex" flexDirection="column" marginTop={2}>
              <FormLabel>DATA DE DEVOLUÇÃO *</FormLabel>
              <Controller
                name="devolution"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    helperText={errors.cpf?.message}
                    error={!!errors.cpf}
                  />
                )}
              />
            </Box>

            <Box display="flex" flexDirection="column" marginTop={2}>
              <FormLabel>PREÇO *</FormLabel>
              <Controller
                name="price"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    helperText={errors.address?.message}
                    error={!!errors.address}
                  />
                )}
              />
            </Box>
            <Box>
              <ButtonSubmit
                variant="contained"
                // onClick={handleClickOpen}
                type="submit"
              >
                Faça sua reserva
              </ButtonSubmit>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
};

export default VehicleDetailsBox;
