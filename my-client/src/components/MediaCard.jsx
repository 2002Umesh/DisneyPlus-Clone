import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";
import { BsCheck2All } from "react-icons/bs";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import ViewMovie from "./ViewMovie";
import { useDispatch } from "react-redux";
import { addWatchlist } from "../store/slices/UserSlice";

export default function MediaCard({ show }) {
  const [check, setCheck] = useState(true);

  const dispatch = useDispatch();
  const addMovie = (payload) => {
    dispatch(addWatchlist(payload));
  };

  return (
    <Fade>
      <Card
        className="cursor-pointer overflow-visible"
        sx={{ maxWidth: 345, maxHeight: 400 }}
      >
        <CardMedia 
          sx={{ height: 200, width: 300 }}
          image={IMAGE_BASE_URL + show.backdrop_path}
          title={""}
        />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
            {show.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {show.overview.slice(0, 50)}...
          </Typography>
        </CardContent>
        <CardActions>
          <ViewMovie movieId={show.id} />

          <button
            size="small"
            onClick={() => {
              setCheck(!check);
              addMovie(show);
            }}
          >
            {check ? "+" : <BsCheck2All />}
          </button>
        </CardActions>
      </Card>
    </Fade>
  );
}
