import React from 'react';
import JokePunchline from "./JokePunchline";

const RandomJokesList = ({jokes, joke, onSelectedJoke, onSavedToggle}) => {

    const jokeListItems = jokes.map((joke, index) => {
        return (
        <li onClick={() => {onSelectedJoke(joke)}} key={index}>
            {joke.setup}
            <button onClick={() => {onSavedToggle(joke)}}>STAR</button>
        </li>
        )
    })

    return (
        <div className="random-jokes">
            <h2>Random Jokes</h2>
            <ul>
                {jokeListItems}
            </ul>
            <JokePunchline joke={joke}/>
        </div>
    )
}

export default RandomJokesList;