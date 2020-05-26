import React from "react";
import { Link } from "react-router-dom";

const MovieList = (props) => {
  return (
    <ul>
      {props.popular.map((film) => (
        <li>
          <Link
            to={{
              pathname: `/${props.hash}/${film.id}`,
              state: { from: props.match.url, qwery: props.qwery },
            }}
          >
            {film.original_title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
