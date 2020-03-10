import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import listeMoviesComp from "./listeMovies";

class AddModalCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      year: "",
      title: "",
      rating: "",
      image: "",
      film: []
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };

  //*************** */
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  addFilm = () => {
    let newFilm = {
      year: this.state.year,
      title: this.state.title,
      rating: this.state.rating,
      image: this.state.image
    };
    this.props.addMovie(newFilm);
    this.setState({
      year: "",
      title: "",
      rating: "",
      image: ""
    });
  };
  //********************** */<i class="fas fa-plus"></i>
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
          <i className="fas fa-plus"></i>
        </Button>

        <Modal show={this.state.show} onHide={this.handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div>
                <label>Title:</label>
                {/* <input type="text" name="title" /> */}
                <input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Image:</label>
                {/* <input type="text" name="image" /> */}
                <input
                  type="text"
                  name="image"
                  value={this.state.image}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Rating:</label>
                {/* <input type="text" name="rating" /> */}
                <input
                  type="text"
                  name="rating"
                  value={this.state.rating}
                  onChange={this.handleChange}
                />
              </div>
              <div>
                <label>Year:</label>
                {/* <input type="text" name="year" /> */}
                <input
                  type="text"
                  name="year"
                  value={this.state.year}
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button onClick={this.addFilm} variant="primary">
              Add Movie
            </Button>
            {/* <listeMoviesComp film={this.state.film} /> */}

            {this.state.film.map(el => (
              <div>
                <p>{el.year}</p>
                <p>{el.title}</p>
                <p>{el.rating}</p>
                <img src={el.image} />
              </div>
            ))}
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddModalCom;
