import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import HomePage from "../components/HomePage";
import NavBar from "../components/NavBar";
import RandomJokesList from "../components/RandomJokesList";
import SavedJokes from "../components/SavedJokes";

const JokeContainer = () => {

    const [randomJokes, setRandomJokes] = useState([]);
    const [selectedJoke, setSelectedJoke] = useState(null);

    const getJokes = () => {
        fetch('https://official-joke-api.appspot.com/jokes/programming/ten')
        .then(res => res.json())
        .then(data => setRandomJokes(data))
    }

    useEffect(() => {
        getJokes()
    }, [])

    const handleSelectedJoke = (joke) => {
        setSelectedJoke(joke)
    };

    const handleSavedToggle = (updatedJoke) => {
        const updatedJokes = randomJokes.map((joke) => {
            if (joke.setup === updatedJoke.setup) {
                joke.saved = !joke.saved
            }
            return joke
        })
        setRandomJokes(updatedJokes)
    }

    return (
        <Router>
            <>
            <NavBar />
            <div className="jokes-container">
                <h1>Jokes</h1>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/jokes" render={() => <RandomJokesList jokes={randomJokes} onSelectedJoke={handleSelectedJoke} joke={selectedJoke} onSavedToggle={handleSavedToggle}/> } />
                    <Route exact path="/saved" render={() => <SavedJokes jokes={randomJokes} />} />
                </Switch>
                
            </div>
            </>
        </Router>
    )
}

export default JokeContainer;