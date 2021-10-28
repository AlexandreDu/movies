import React from "react";  

export const SingleMovieMenu = ({handleClick, activeContent}) => {


    
    const activeItemClass = "menu-current-item"
    const itemClass = "menu-single-movie-item"
    return (
        <nav>
            <ul className="menu-single-movie-wrapper">
                <li name="synopsis" onClick={(e) => handleClick(e)} className={activeContent === "synopsis" ? activeItemClass : itemClass }>Synopsis</li>
                <li name="info" onClick={(e) => handleClick(e)}  className={activeContent === "info" ? activeItemClass : itemClass }>Informations</li>
            </ul>
        </nav>
    )
}