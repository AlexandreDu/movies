import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from '../features/films/moviesSlice'

export default configureStore({
    reducer: {
        movies: moviesReducer
    }
})