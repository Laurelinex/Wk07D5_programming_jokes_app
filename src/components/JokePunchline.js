import React from 'react';

const JokePunchline = ({joke, onSavedToggle}) => {

    if(!joke) {
        return (null)
    }

    return (
        <div className="setup-punchline">
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button onClick={() => {onSavedToggle(joke)}}>
                {joke.saved ? 'Unsave' : 'Save'}
            </button>
        </div>
    )
}

export default JokePunchline;