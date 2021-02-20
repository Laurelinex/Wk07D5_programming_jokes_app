import React from 'react';

const SavedJokes = ({jokes, onSavedToggle}) => {

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
                <button onClick={() => {onSavedToggle(joke)}}>
                    {joke.saved ? 'Unsave' : 'Save'}
                </button>
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