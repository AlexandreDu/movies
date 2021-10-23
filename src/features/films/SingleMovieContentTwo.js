import React from "react";  
import { useDispatch, useSelector } from 'react-redux'
import { selectMovieById } from './moviesSlice'
import { MdHowToVote, MdGrade} from 'react-icons/md';
import { IconContext } from "react-icons";

export const SingleMovieContentTwo = ({movieIdParsed, isActive}) => {

    console.log(movieIdParsed)
    const movie = useSelector(state => selectMovieById(state, movieIdParsed))
    console.log("movie dans wrapper ", movie)
    const content = "contentTwo"
    return (
        isActive === content ? 
        <>
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
        </>
        : null
    )
}