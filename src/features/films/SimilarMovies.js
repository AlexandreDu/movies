import React, { useEffect, useState } from 'react'
import {Link} from "react-router-dom";


export const SimilarMovies = ({movie}) => {

    const [similarMovies, setSimilarMovies] = useState([])
    console.log(movie)
    useEffect(() => {

        fetch(`https://api.themoviedb.org/3/movie/${movie.id}/similar?api_key=4affe9e3000bf530dc1a6731e68f2bb8&language=en-US&page=1`)
        .then(response => response.json())
        .then(data => {
            console.log(data.results)
            setSimilarMovies(data.results)
        })

    }, [])

    return (
        <section>
            <h4>Vous devriez aimez les films suivants :</h4>
            <div className="similar-movies-wrapper">
                {similarMovies.map(similarMovie => {
                    return (
                        <div className="similar-movie-wrapper">
                            <div className="similar-movie-title-wrapper">
                                <h4 className="similar-movie-title">{similarMovie.original_title}</h4>
                            </div>
                            <img className="similar-movie-image" src={`https://image.tmdb.org/t/p/w500/${similarMovie.backdrop_path}`} alt={similarMovie.original_title} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}       