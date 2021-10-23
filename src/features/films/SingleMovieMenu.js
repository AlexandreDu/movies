import React from "react";  

export const SingleMovieMenu = ({handleClick}) => {


    return (
        <nav>
            <ul className="menu-single-movie-wrapper">
                <li name="contentOne" onClick={(e) => handleClick(e)} className="menu-single-movie-item">Bande annonce</li>
                <li name="contentTwo" onClick={(e) => handleClick(e)} className="menu-single-movie-item">Avis</li>
                <li className="menu-single-movie-item">Synopsis</li>
                <li className="menu-single-movie-item">Images</li>
            </ul>
        </nav>
    )
}