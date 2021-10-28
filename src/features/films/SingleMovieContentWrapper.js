import React, { useState, useEffect } from "react" 
import { Synopsis } from "./Synopsis";
import { Info} from './Info'

export const SingleMovieContentWrapper = ({movieIdParsed, activeContent}) => {

    

    return (
        <section className="single-movie-wrapper">
                <Synopsis activeContent={activeContent} movieIdParsed={movieIdParsed} contentTopic="synopsis" />
                <Info activeContent={activeContent} movieIdParsed={movieIdParsed} contentTopic="info" />
        </section>


    )
}