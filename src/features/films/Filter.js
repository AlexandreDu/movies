import React from "react";  
import { Years } from "./Years";
import { useDispatch, useSelector } from 'react-redux'
import { selectLimitPage, changeLimitPage } from './moviesSlice'

export const Filter = () => {
    const dispatch = useDispatch()
    const limitPage = useSelector(selectLimitPage)



    const handleChange = (e) => {
            const newLimit = parseInt(e.target.value)
            dispatch(changeLimitPage(newLimit))
        
    }
    
    
    return (
        <div className="filter-wrapper">
            <Years />
            <label>Films par page
                <select className="filter-limiter" value={limitPage} onChange={(e) => handleChange(e)}>
                    <option value="3">3</option>
                    <option value="6">6</option>
                    <option value="9">9</option>
                </select>
            </label>
        </div>
    )
}