import React, { Component } from "react";
import MovieCardcomp from './MovieCard'
import AddModalCom from './Modal'


const listeMoviesComp = props => {

    return (

        <div className="d-flex  flex-wrap  justify-content-between">
            {
                props.movies.map(el => <MovieCardcomp movie={el} />)

            }

        </div >
    )
}
export default listeMoviesComp

