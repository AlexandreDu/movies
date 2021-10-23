import React from 'react'   
import { useDispatch, useSelector } from 'react-redux'
import { selectAllMovies, selectLimitPage, selectStatus, selectCurrentPage, changePage } from './moviesSlice'

export const PrevNextButtons = ({moviesQuantity}) => {
    const dispatch = useDispatch()

    const limitPage = useSelector(selectLimitPage)
    const currentPage = useSelector(selectCurrentPage)

    const indexStart = currentPage * limitPage - limitPage


    const renderPrevButton = () => {
        if(indexStart > 0) {
            return (
                <div>
                    <button className="direction-button" name="previous" onClick={(e) => handleClick(e)}>Prev</button>
                </div>
            )
        }
    }

    const renderNextButton = () => {
        if(indexStart + limitPage < moviesQuantity) {
            return (
                <div>
                    <button className="direction-button" name="next" onClick={(e) => handleClick(e)}>Next</button>  
                </div>
            )
        }
    }

    const handleClick = (e) => {
        console.log(e.target.name)
        const direction = e.target.name
        dispatch(changePage(direction))
    }
    return (
        <div className="direction-buttons-wrapper">
            {renderPrevButton()}
            {renderNextButton()}
        </div>
        
    )
}