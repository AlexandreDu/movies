import React from "react";  
import { useDispatch, useSelector } from 'react-redux'
import { selectMovieById } from './moviesSlice'
import { MdHowToVote, MdGrade} from 'react-icons/md';
import { IconContext } from "react-icons";
import { CSSTransition } from 'react-transition-group';
export const Synopsis = ({movieIdParsed, activeContent, contentTopic}) => {

   
    const movie = useSelector(state => selectMovieById(state, movieIdParsed))
    console.log("movie dans wrapper ", movie)

    return (
        activeContent === contentTopic ? 
        <>
        
            <div className="synopsis-image-wrapper">
                <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt ={movie.title}/>
                
            </div>
            <div className="synopsis-overview-wrapper">
                <h3>{movie.title}</h3>
                <p>{movie.overview}</p>
            </div>
       
        </>
        
        : null
    )
}