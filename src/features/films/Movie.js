import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";
import { MdHowToVote, MdGrade} from 'react-icons/md';
import { IconContext } from "react-icons";
import { CSSTransition } from 'react-transition-group';
export const Movie = ({movie}) => {


    const renderYearFilm = () => {
        return new Date(movie.release_date).getFullYear()
      
    }
    return (
        <CSSTransition
        in={true}
        appear={true}
        timeout={100}
        classNames="opacite"
        unmountOnExit
        >
            <div className="movie-wrapper">
                <div className="movie-image-wrapper">
                    <img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt ={movie.title}/>
                </div>
                <div className="movie-title-wrapper">
                    <h3>{movie.title}</h3>
                </div>
                <div className="movie-overview-wrapper">
                    <p>{movie.overview.substring(0, 95)}...</p>
                </div>
                <div className="movie-date-wrapper">
                    <p>{renderYearFilm()}</p>
                </div>
                <div className="movie-votes-wrapper">
                    <div>
                        <IconContext.Provider value={{ className: "icons" }}>                       
                            <span>
                                <MdGrade /> 
                            </span>
                            <span className="movie-vote-average">
                                {movie.vote_average}
                            </span>
                        </IconContext.Provider>
                    </div>
                    <div>
                        <IconContext.Provider value={{ className: "icons" }}>
                            <span>
                                <MdHowToVote /> 
                            </span>
                            <span className="movie-vote-count">
                                {movie.vote_count}
                            </span>
                        </IconContext.Provider> 
                    </div>          
                </div>
                <div className="movie-button-container">               
                    <button className="movie-button"><Link to={`/movie/${movie.id}`}> + de détails</Link></button>
                </div>
                
            </div>
        </CSSTransition>
    )
}       