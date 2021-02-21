import React from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";

const JokePunchline = ({joke, onSavedToggle}) => {

    if(!joke) {
        return (null)
    }

    return (
        <div className="setup-punchline">
            <p>{joke.setup}</p>
            <p>{joke.punchline}</p>
            <button onClick={() => {onSavedToggle(joke)}}>
                {joke.saved ? <FaHeart/> : <FaRegHeart />}
            </button>
        </div>
    )
}

export default JokePunchline;