import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";

import { type } from "../utils";

import ModalPokemon from "./Modal";

import { useState } from "react";

const cardStyles = {
  transition: 'transform 0.2s',
  width: "16rem",
  cursor: "pointer",
  marginTop: "15px",
  marginLeft: "25px",
  background: "rgba(68, 85, 92, 0.4)",
  '&:hover': {
    transform: 'scale(1.03)',
    background: "rgba(68, 85, 92, 0.8)",
  },
};

export default function PokemonCard({ item, types }) {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <Card
        sx={cardStyles}
        onClick={() => {
          { open === false ? setOpen(true) : setOpen(false) }
        }}
      >
        {open && (
          <ModalPokemon open={open} item={item} />
        )}
        <CardActionArea>
          <Typography
            className="text-uppercase text-center mt-2"
            gutterBottom
            variant="h5"
            component="div"
            color={"white"}
          >
            {item.name}
          </Typography>
          <CardMedia component="img" width="140" image={item.sprites.front_default} title={item.name} />
          <CardContent>
            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography className="text-capitalize" variant="span" component="div">
                {type(types)}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

// image={item.sprites.front_shiny}
