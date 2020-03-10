import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import { Form } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import AddModalComp from "./Modal";
import ListeMoviesComp from "./listeMovies";
import Rating from "./Rating";
import Search from "./Search";
class reactmovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          year: "2020",
          title: "Alpha",
          rating: 2,
          image: "https://www.sortiesdvd.com/affichethumb/8114.jpg"
        },
        {
          year: "2012",
          title: "Vamps",
          rating: 2,
          image:
            "https://www.ecranlarge.com/uploads/image/001/092/vamps-visuel-dvd-1092639.jpg"
        },
        {
          year: "2019",
          title: "Alpha",
          rating: 5,
          image: "https://www.sortiesdvd.com/affichethumb/8114.jpg"
        },
        {
          year: "2049",
          title: "Vamps",
          rating: 5,
          image:
            "https://www.ecranlarge.com/uploads/image/001/092/vamps-visuel-dvd-1092639.jpg"
        },
        {
          year: "2029",
          title: "Sans Froid",
          rating: 5,
          image:
            "https://fr.web.img6.acsta.net/pictures/19/01/02/11/50/4939911.jpg"
        },
        {
          year: "2009",
          title: "Sans Froid",
          rating: 5,
          image:
            "https://fr.web.img6.acsta.net/pictures/19/01/02/11/50/4939911.jpg"
        },
        {
          year: "2010",
          title: "Vamps",
          rating: 4,
          image:
            "https://www.ecranlarge.com/uploads/image/001/092/vamps-visuel-dvd-1092639.jpg"
        },
        {
          year: "2021",
          title: "Alpha",
          rating: 3,
          image: "https://www.sortiesdvd.com/affichethumb/8114.jpg"
        },
        {
          year: "2012",
          title: "Vamps",
          rating: 2,
          image:
            "https://www.ecranlarge.com/uploads/image/001/092/vamps-visuel-dvd-1092639.jpg"
        },
        {
          year: "2020",
          title: "Alpha",
          rating: 3,
          image: "https://www.sortiesdvd.com/affichethumb/8114.jpg"
        },
        {
          year: "2011",
          title: "Alpha",
          rating: 3,
          image: "https://www.sortiesdvd.com/affichethumb/8114.jpg"
        },
        {
          year: "2010",
          title: "Vamps",
          rating: 5,
          image:
            "https://www.ecranlarge.com/uploads/image/001/092/vamps-visuel-dvd-1092639.jpg"
        }
      ],
      newRate: 1,
      newSearch: ""
    };
  }
  setRate = x => {
    this.setState({ newRate: x });
  };
  addMovie = y => {
    this.setState({
      movies: this.state.movies.concat(y)
    });
  };
  SearchFilm = z => {
    this.setState({ newSearch: z });
  };
  render() {
    return (
      <div className="container">
        <div className="navbaritems">
          <Navbar bg="dark" variant="dark" className="navbaritem">
            <Navbar.Brand href="#home"> Films</Navbar.Brand>

            <Form inline className="impute">
              {/* <Button variant="outline-info">Search</Button> */}
              <Search
                Searchfilm={newsearchfilm => this.SearchFilm(newsearchfilm)}
              />
            </Form>
            <Rating
              setRate={x => this.setRate(x)}
              rating={this.state.newRate}
            />
          </Navbar>
        </div>
        <div className="mov">
          {" "}
          <ListeMoviesComp
            movies={this.state.movies.filter(
              el =>
                el.rating >= this.state.newRate &&
                el.title.toUpperCase()
                  .includes(this.state.newSearch.toUpperCase().trim())
            )}
          />
        </div>
        <div className="cadre">
          <AddModalComp addMovie={newMovie => this.addMovie(newMovie)} />
        </div>
      </div>
    );
  }
}

export default reactmovie;
