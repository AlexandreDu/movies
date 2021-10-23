import React, { useState, useEffect } from 'react'
import { SimilarMovies } from './SimilarMovies';
import { useDispatch, useSelector } from 'react-redux'
import { selectMovieById } from './moviesSlice'
import {Link} from "react-router-dom";

import { SingleMovieMenu } from './SingleMovieMenu';
import {SingleMovieContentWrapper} from './SingleMovieContentWrapper'


export const SingleMoviePage = ({match}) => {
    const {movieId} = match.params
    const movieIdParsed = parseInt(movieId)
    console.log(movieIdParsed)
    const movie = useSelector(state => selectMovieById(state, movieIdParsed))

    const [isActive, setIsActive] = useState('contentOne')
    
    const handleClick = (e) => {
        setIsActive(e.target.getAttribute("name"))
    }
    
    const dispatch = useDispatch()
    

    return (
        <div className="single-movie-page-wrapper">
            <SingleMovieMenu handleClick={handleClick} isActive={isActive} />
            <SingleMovieContentWrapper movieIdParsed={movieIdParsed} isActive={isActive} />
            <SimilarMovies movie={movie} />
        </div>
    )
    
}