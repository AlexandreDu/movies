
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
//https://api.themoviedb.org/3/movie/top_rated?api_key=4affe9e3000bf530dc1a6731e68f2bb8&language=en-US&page=1

const initialState = {
    movies: [],
    status: 'idle',
    error: null,
    filters: {
        limitPage: 6,
        years: []
    },
    currentPage: 1
}
export const fetchMovies = createAsyncThunk('movies/fetchMovies', async() => {
    const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=4affe9e3000bf530dc1a6731e68f2bb8&language=en-US&page=1')
    const moviesData = await response.json()
    return moviesData.results
})


const moviesSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        changePage(state, action) {
            if(action.payload === "next") {
                state.currentPage++
            } else if (action.payload === "previous") {
                state.currentPage--
            } else if (action.payload ==="page") {
                state.currentPage = 1
            } else {
                console.log(action.payload)
                state.currentPage = action.payload
            }
        },
        changeLimitPage(state, action) {
            state.filters.limitPage = action.payload
        },
        addFilter(state, action) {
            // si l'année est déjà présente, alors on l'enlève des filtres
            if(state.filters.years.includes(action.payload)) {
                state.filters.years = state.filters.years.filter(year => year !== action.payload)
            } else {
                state.filters.years.push(action.payload)
            }

        },
        clearFilter(state, action) {

            state.filters.years = []
        }

    },
    extraReducers(builder) {
        builder
            .addCase(fetchMovies.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'succeeded'
                console.log(action.payload)
                state.movies = state.movies.concat(action.payload)
                
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export default moviesSlice.reducer

export const {changePage, changeLimitPage, addFilter, clearFilter} = moviesSlice.actions

export const selectAllMovies = (state) => state.movies.movies

export const selectMovieById = (state, id) => state.movies.movies.find(movie => movie.id === id)

export const selectStatus = (state) => state.movies.status

export const selectLimitPage = (state) => state.movies.filters.limitPage

export const selectFilter = (state) => {
   return state.movies.filters.years
}

export const selectCurrentPage = (state) => state.movies.currentPage

export const selectMoviesFiltered = (state) => {

    const yearFilterAbs = state.movies.filters.years.map(year => year.substring(0, 3))
    let moviesList = state.movies.movies.filter(movie => {
        return yearFilterAbs.includes(movie.release_date.substring(0, 3))       
    })
      // s'il n'y a pas d'années qui sont filtrées, alors il faut afficher tous les films
    if(yearFilterAbs.length === 0) {
        moviesList = state.movies.movies 
      }

      return moviesList
}