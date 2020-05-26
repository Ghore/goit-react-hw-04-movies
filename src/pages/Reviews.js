import React, { Component } from "react";
import { getReviews } from "../services/MovieApi";

export default class Cast extends Component {
  state = { review: [] };

  componentDidMount() {
    const id = this.props.match.params.movieId;
    getReviews(id).then((data) => this.setState({ review: data.data.results }));
  }

  render() {
    return (
      <ul>
        {this.state.review.map((item) => (
          <li key={item.id}>
            <p>{item.author}</p>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    );
  }
}
