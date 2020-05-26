import React from "react";
import style from '../css/filmDetail.module.css'

const FilmDescription = ({
  title,
  release_date,
  popularity,
  overview,
  genres = [],
  poster_path,
}) => (
  <>
    <div className={style.wrapper}>
      <img
        alt="film"
        src={"https://image.tmdb.org/t/p/w300_and_h450_bestv2" + poster_path}
      />
     <div className={style.Contentwrapper}>

    
      <h2>
        {title} ({release_date}){" "}
      </h2>
      <p>Popularity {popularity}</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h2>Genres</h2>
      <ul className={style.genres}>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
      </div>
    </div>
  </>
);

export default FilmDescription;
