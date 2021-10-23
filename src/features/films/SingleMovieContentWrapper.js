import React, { useState } from "react" 
import { SingleMovieContentOne } from "./SingleMovieContentOne";
import { SingleMovieContentTwo } from './SingleMovieContentTwo'
export const SingleMovieContentWrapper = ({movieIdParsed, isActive}) => {

 
    return (
        <section className="single-movie-wrapper">
                <SingleMovieContentOne isActive={isActive} movieIdParsed={movieIdParsed} />
                <SingleMovieContentTwo isActive={isActive} movieIdParsed={movieIdParsed} />
        </section>



    )
}