import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import HomePage from "../components/HomePage";
import NavBar from "../components/NavBar";
import RandomJokesList from "../components/RandomJokesList";
import FavouriteJokes from "../components/FavouriteJokes";

const JokeContainer = () => {

    const [randomJokes, setRandomJokes] = useState([]);

    const getJokes = () => {
        fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
        .then(res => res.json())
        .then(data => setRandomJokes(data))
    }

    useEffect(() => {
        getJokes()
    }, [])

    return (
        <Router>
            <>
            <NavBar />
            <div className="jokes-container">
                <h1>Jokes</h1>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/jokes" render={() => <RandomJokesList jokes={randomJokes}/>} />
                <Route exact path="/favourites" component={FavouriteJokes} />
            </div>

            </>
        </Router>
    )

}

export default JokeContainer;