import React, { useEffect, useState } from "react";  

export const Info = ({movieIdParsed, activeContent, contentTopic}) => {

   
    const [infoMovie, setInfoMovie] = useState({})
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieIdParsed}?api_key=4affe9e3000bf530dc1a6731e68f2bb8&language=en-US`)
        .then(response => response.json())
        .then(data => {
           setInfoMovie(data)
        })
    }, [movieIdParsed])



    const renderInfo = () => {
      return (
        <div>
            <p>Date de sortie : {infoMovie.release_date}</p>
            <div>
                {infoMovie.production_companies.map((productionCompanie, index) => { 
                    return (
                        
                        <div key={index} className="logo-company-wrapper">
                            <img className="logo-company" src={"https://image.tmdb.org/t/p/w500/" + productionCompanie.logo_path} alt="societe de production" />
                        </div>
                    )  
                })}
            
            </div>
    
            <p>Budget : {infoMovie.budget === 0 ? "non communiqué" : infoMovie.budget + "$"} </p>
        </div>
      )
        
    }

    return (
        activeContent === contentTopic ? 
        <>
            {renderInfo()}
        </>
        : null
    )
}