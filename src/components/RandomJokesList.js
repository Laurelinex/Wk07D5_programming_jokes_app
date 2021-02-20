import React from 'react';
import JokePunchline from "./JokePunchline";

const RandomJokesList = ({jokes, joke, onSelectedJoke, onSavedToggle}) => {

    const jokeListItems = jokes.map((joke, index) => {
        return (
        <li className="listed-joke-item" onClick={() => {onSelectedJoke(joke)}} key={index}>
            {joke.setup}
        </li>
        )
    })

    return (
        <div>
            <h2>Random Jokes</h2>
            <div className="random-jokes">
            <ul className="listed-jokes">
                {jokeListItems}
            </ul>
            <JokePunchline joke={joke} onSavedToggle={onSavedToggle}/>
            </div>
        </div>
    )
}

export default RandomJokesList;