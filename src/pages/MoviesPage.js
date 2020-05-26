import React, { Component } from "react";
import * as MovieApi from "../services/MovieApi";
import { Link } from "react-router-dom";
import queryString from "query-string";

export default class MoviesPage extends Component {
  state = {
    query: "",
    films: [],
  };

  componentDidMount() {
    if (this.props.location.search) {
      const locationQuery = queryString.parse(this.props.location.search).query;
      this.getForQuery(locationQuery);
    }
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getForQuery(this.state.query);
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `query=${this.state.query}`,
    });
  };

  getForQuery = (query) => {
    MovieApi.getForQuery(query).then((data) =>
      this.setState({
        films: data.data.results,
        query,
      })
    );
  };

  render() {
    return (
      <>
      
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.query}
            onChange={this.handleChange}
            type="text"
            placeholder="Search movie"
          />
          <button type="submit">
            Search
          </button>
        </form>

        <ul>
          {this.state.films.length > 0 &&
            this.state.films.map(
              (film) =>
                film.title !== "Undefined" && (
                  <li key={film.id}>
                    <Link
                      to={{
                        pathname: `/movies/${film.id}`,
                        state: {
                          from: this.props.location.pathname,
                          query: this.state.query,
                        },
                      }}
                    >
                      {film.title}
                    </Link>
                  </li>
                )
            )}
        </ul>
      </>
    );
  }
}
