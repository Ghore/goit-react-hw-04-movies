import React, { Component } from "react";
import { getPopular } from "../services/MovieApi";
import MovieList from "../components/movieList/MovieList";

class HomePage extends Component {
  state = {
    popular: [],
    qwery: "",
  };

  componentDidMount() {
    getPopular().then((data) => this.setState({ popular: data.data.results }));
  }

  render() {
    const { popular, qwery } = this.state;
    return (
      <>
        <h1>Movies</h1>
        <MovieList {...this.props} popular={popular} qwery={qwery} />
      </>
    );
  }
}

export default HomePage;
