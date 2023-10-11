import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import { type } from "../utils";
import { useNavigate } from "react-router-dom";

export default function PokemonCard({ item, types, setPokemonDados }) {
  const navigate = useNavigate();

  return (
    <div>
      <Card
        sx={{ maxWidth: 345 }}
        style={{
          width: "16rem",
          cursor: "pointer",
          marginTop: "15px",
          marginLeft: "25px",
          background: "rgba(68, 85, 92, 0.4)",
        }}
        onClick={() => {
          navigate(`/${item.name}`);
          setPokemonDados(item);
        }}
      >
        <CardActionArea>
          <Typography
            className="text-uppercase bold text-center mt-1"
            gutterBottom
            variant="h5"
            component="div"
            style={{ color: "#FFF" }}
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
