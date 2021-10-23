import React from "react"
import { selectAllMovies, selectLimitPage, selectCurrentPage, changePage } from './moviesSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Pagination = ({moviesQuantity}) => {
    
    const dispatch = useDispatch()
    const limitPage = useSelector(selectLimitPage)
    const currentPage = useSelector(selectCurrentPage)

    const handleClick = (e) => {
        
        const nextCurrentPage = parseInt(e.target.textContent)
        console.log(nextCurrentPage)
        dispatch(changePage(nextCurrentPage))
    }

    const renderPagination = () => {

    const filmsQuantities = moviesQuantity
     
            const pagesQuantity = Math.ceil(filmsQuantities / limitPage)
            console.log(filmsQuantities / limitPage)
            console.log(filmsQuantities, limitPage)
            return new Array(pagesQuantity === 0 ? 1 : pagesQuantity).fill(0).map((element, index) => {
 
               return <span key={index} onClick={((e) => handleClick(e))} className={`${currentPage === index + 1 ? "current-page" : "page"}`}>{index + 1}</span>
            })
   
    }
    
    return (
        <div>
            {renderPagination()}
        </div>
    )

}