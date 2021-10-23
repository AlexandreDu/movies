import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import {MoviesList} from './features/films/MoviesList'
import {SingleMoviePage} from './features/films/SingleMoviePage'

function App() {
  return (
    <>
        <main>
          <Switch>
            <Route exact path="/" component={MoviesList}/>  
            <Route exact path="/movie/:movieId" component={SingleMoviePage}/>     
          </Switch>
        </main>
    </>
  )
}

export default App;
