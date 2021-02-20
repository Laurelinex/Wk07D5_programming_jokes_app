import React from 'react';

const RandomJokesList = ({jokes}) => {

    const jokeListItems = jokes.map((joke, index) => {
        return <li key={index}>{joke.setup}</li>
    })

    return (
        <div className="random-jokes">
            <h2>Random Jokes</h2>
            <ul>
                {jokeListItems}
            </ul>
        </div>
    )
}

export default RandomJokesList;