import React, { useEffect } from "react";
import config from "../config.json";
import styles from "./FavListItem.module.css";

const FavListItem = ({ id, poster, title, year }) => {

  return (
    <>
      <a href={config.moviesUrl + id + "/"} target="_blank">
        <img src={poster} alt="" className={styles.moviePoster} />
      </a>
      <p className={styles.movieTitle}>{title}</p>
      <p className={styles.movieTitle}>{year}</p>
    </>
  );
};

export default FavListItem;
