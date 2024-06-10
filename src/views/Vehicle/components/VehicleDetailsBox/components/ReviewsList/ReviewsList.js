import React from "react";
import {
  Typography,
  ListItemAvatar,
  Divider,
  ListItemText,
  ListItem,
  Avatar,
  List,
} from "@mui/material";

const ReviewsList = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nota 9"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Tiringa
              </Typography>
              {
                " — Ja andei em muitas carroças, porém, p*** que carro f*** muito bão…"
              }
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nota 10"
          secondary={
            <>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Baianinho de MAUA
              </Typography>
              {" - MARAVILHOSO... Ja quero mais viagens!…"}
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Nota 10"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Manoel Gomes
              </Typography>
              {" — Carro excelente, experiência incrível!!!…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
};

export default ReviewsList;
