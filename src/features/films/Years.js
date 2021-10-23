import React, { useState } from "react"; 
import { useSelector, useDispatch } from "react-redux";
import { selectAllMovies, addFilter } from "./moviesSlice";

export const Years = () => {

    const [inputFilters, setInputFilter] = useState({})

    const movies = useSelector(selectAllMovies)
    const dispatch = useDispatch()

    const yearsNotUniquesSorted = movies.map(movie => {
        return movie.release_date.substring(0, 3) + 0 
    }).sort((a, b) =>  a - b )
    const yearsUniques = [...new Set(yearsNotUniquesSorted)]

    const renderYearsUniques = yearsUniques.map(element => {
        return  (
            <label>
                {element}
                <input 
                    type="checkbox"
                    className="year-check"
                    value={element}
                    name={element}
                    onChange={(e) => handleChange(e)}
                    checked={inputFilters.element}
                />
            </label>
            )
    })
    

    const handleChange = (e) => {
        console.log(e.target.value)
        setInputFilter(()=> {
            return {
                ...inputFilters,
                [e.target.name]: e.target.checked
            }
        })
        dispatch(addFilter(e.target.name))
    }

    return (
        <div>
            {renderYearsUniques}
            
        </div>
    )
}

