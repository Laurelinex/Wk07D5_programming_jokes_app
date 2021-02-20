import React from 'react';

const JokePunchline = ({joke}) => {

    if(!joke) {
        return (null)
    }

    return (
        <div className="punchline">
            <p>{joke.punchline}</p>
        </div>
    )
}

export default JokePunchline;