import React, { Component } from "react";
import { FormControl } from "react-bootstrap";

class Search extends Component {
  render() {
    return (
      <div>
        <FormControl
          onChange={e => this.props.Searchfilm(e.target.value)}
          type="text"
          placeholder="Name Of Your Film"
          className="mr-sm-2 inp "
        />
      </div>
    );
  }
}

export default Search;
