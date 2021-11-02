import React, { useState, useEffect } from 'react'
import { fetchMovies, selectFilter } from './moviesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Movie } from './Movie'
import { Pagination } from './Pagination'
import { PrevNextButtons } from './PrevNextButtons'
import { Filter } from './Filter'
import { selectMoviesFiltered, selectLimitPage, selectStatus, selectCurrentPage, changePage, clearFilter } from './moviesSlice'

export const MoviesList = () => {

    const moviesList = useSelector(selectMoviesFiltered)
    const status = useSelector(selectStatus)
    const limitPage = useSelector(selectLimitPage)
    const currentPage = useSelector(selectCurrentPage)

    
    const dispatch = useDispatch()

    useEffect(() => {
        if(status === 'idle') {
            dispatch(fetchMovies())
        }
        
        dispatch(clearFilter())

    }, [status, dispatch])


    const moviesRender = () => {
        
        const indexStart = currentPage * limitPage - limitPage
        const indexEnd = indexStart + limitPage

        // si l'utilisateur est sur la dernière page et agrandit la limite de films, alors l'index va dépasser la longueur du tableau movies (donc rien à afficher --> on force le retour à la première page)
        if(indexStart > moviesList.length) {
            dispatch(changePage("page"))
        }
       
        return moviesList.slice(indexStart, indexEnd).map(movie => (
            <Movie key={movie.id} movie={movie} />
        ))           
    }

    return (
        <>
        <Filter />
        <section className="movies-wrapper"> 
            {moviesRender()}
        </section>
        <PrevNextButtons moviesQuantity={moviesList.length}/>
        <Pagination moviesQuantity={moviesList.length} />
        </>
    )
    
}