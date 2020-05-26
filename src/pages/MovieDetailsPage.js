import React, { Component } from "react";
import { Route, Link, Switch } from "react-router-dom";
import { getMovie } from "../services/MovieApi";
import Cast from "../pages/Cast";
import Reviews from "../pages/Reviews";
import Film from "../components/film/FilmDetail";

class MovieDetailsPage extends Component {
  state = {
    movie: [],
    info: null,
  };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    getMovie(id).then((movie) => this.setState({ movie: movie.data }));
  }
  goBack = () => {
    this.props.history.push("/", this.state.info);
  };

  render() {
    const { movie } = this.state;
    return (
      <>
        <Film {...movie} />

        {movie && (
          <div>
            <Link
              to={{
                pathname: `/movies/${this.props.match.params.movieId}/cast`,
              }}
            >
              Cast
            </Link>
            {this.state.info ? (
              <Link
                to={{
                  pathname: `${this.state.info.from}`,
                  state: {
                    qwery: this.state.info.qwery,
                  },
                  search: this.state.info.qwery
                    ? `?qwery=${this.state.info.qwery}`
                    : "",
                }}
              >
                Go back link
              </Link>
            ) : (
              <Link
                to={{
                  pathname: "/",
                }}
              >
                Go back link
              </Link>
            )}
            <Link
              to={{
                pathname: `${this.props.match.url}/review`,
              }}
            >
              Review
            </Link>
            <Switch>
              <Route exact path={`/movies/:movieId/cast`} component={Cast} />
              <Route
                exact
                path={"/movies/:movieId/review"}
                component={Reviews}
              />
            </Switch>
          </div>
        )}
      </>
    );
  }
}

export default MovieDetailsPage;
