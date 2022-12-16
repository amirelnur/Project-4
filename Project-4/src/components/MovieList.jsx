import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectID } from "../feautures/saveToggle";
import Slider from "./Slider";
import MovieListItem from "./MovieListItem";

const MovieList = ({ movies }) => {
  const disable = useSelector(selectID);

  return (
    <>
      {movies?.length ? movies.map((m) => (
          <MovieListItem movie={m} key={m.imdbID} disable={!!disable} />
        ))
        : <Slider />}
    </>
  );
};

export default MovieList;
