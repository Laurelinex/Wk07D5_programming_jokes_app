import React from 'react';

const SavedJokes = ({jokes}) => {

    if(!jokes) {
        return(null)
    }

    const savedJokes = jokes.filter((joke) => {
        return joke.saved
    })

    const savedJokesNodes = savedJokes.map((joke, index) => {
        return (
            <div key={index}>
                <p>{joke.setup}</p>
                <p>{joke.punchline}</p>
            </div>
        )
    })

    return (
        <div className="saved-jokes">
            <h2>Saved Jokes</h2>
            {savedJokesNodes}
        </div>
    )
}

export default SavedJokes;