import React, { Component } from "react";
import { getActors } from "../services/MovieApi";
import style from '../components/css/cast.module.css'
export default class Cast extends Component {
  state = { cast: [] };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    getActors(id).then((data) => this.setState({ cast: data.data.cast }));
  }

  render() {
    return (
      <ul className={style.actorsList}>
        {this.state.cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + actor.profile_path}
              width="100px"
              height="auto"
            />
            <p>{actor.name}</p>
            <p>character: {actor.character}</p>
          </li>
        ))}
      </ul>
    );
  }
}
