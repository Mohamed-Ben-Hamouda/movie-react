import React, { Component } from "react";
import AddModalComp from "./Modal";
import Rating from "./Rating";

class MovieCardcomp extends Component {
  render() {
    return (
      <div className="tag">
        <img className="img" src={this.props.movie.image} />
        <p className="year">{this.props.movie.year}</p>
        <p className="title">{this.props.movie.title}</p>
        {/* <p className="rating">{this.props.movie.rating}</p> */}
        <p className="rating">
          <Rating rating={this.props.movie.rating} setRate={() => {}} />
        </p>
      </div>
    );
  }
}

export default MovieCardcomp;
