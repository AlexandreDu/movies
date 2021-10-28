import React, { useState, useEffect } from 'react'
import { SimilarMovies } from './SimilarMovies';
import { useSelector } from 'react-redux'
import { selectMovieById } from './moviesSlice'
import { SingleMovieMenu } from './SingleMovieMenu';
import {SingleMovieContentWrapper} from './SingleMovieContentWrapper'
import { CSSTransition } from 'react-transition-group';

export const SingleMoviePage = ({match}) => {
    const {movieId} = match.params
    const movieIdParsed = parseInt(movieId)
    console.log(movieIdParsed)
    const movie = useSelector(state => selectMovieById(state, movieIdParsed))

    const [activeContent, setActiveContent] = useState('synopsis')
    
    const handleClick = (e) => {
        setActiveContent(e.target.getAttribute("name"))
    }
    

    return (
        <>
            <CSSTransition
            in={true}
            appear={true}
            timeout={100}
            classNames="opacite"
            unmountOnExit
            >
                <div className="single-movie-page-wrapper">
                    <SingleMovieMenu handleClick={handleClick} activeContent={activeContent} />
                    <SingleMovieContentWrapper movieIdParsed={movieIdParsed} activeContent={activeContent} />
                    <SimilarMovies movie={movie} />
                </div>
            </CSSTransition>
        </>
    )
    
}