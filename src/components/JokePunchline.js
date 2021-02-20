import React from 'react';

const JokePunchline = ({joke}) => {

    if(!joke) {
        return (null)
    }

    return (
        <div className="setup-punchline">
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
        </div>
    )
}

export default JokePunchline;