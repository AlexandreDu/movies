import React from "react";  
import { useDispatch, useSelector } from 'react-redux'
import { selectMovieById } from './moviesSlice'
import { MdHowToVote, MdGrade} from 'react-icons/md';
import { IconContext } from "react-icons";

export const SingleMovieContentOne = ({movieIdParsed, isActive}) => {

   
    const movie = useSelector(state => selectMovieById(state, movieIdParsed))
    console.log("movie dans wrapper ", movie)
    const content = "contentOne"
    return (
        isActive === content ? 
        <>
            <div className="single-movie-image-wrapper">


                <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt ={movie.title}/>
            </div>
            <div className="movie-title-wrapper">
                <h3>{movie.title}</h3>
            </div>
            <div className="movie-overview-wrapper">
                <p>{movie.overview}</p>
            </div>

        </>
        
        : null
    )
}