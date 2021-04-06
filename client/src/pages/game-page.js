import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import randomizer from '../util/randomizer';

function Game() {

    const [characterData, setCharacterData] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState();

    const { id: gameId } = useParams();


    useEffect(() => {
        fetch(`http://agile-inlet-31690.herokuapp.com/api/playeroptions/${gameId}`, {
            
        })
        .then(res => res.json())
        .then(data => setCharacterData(data));}
    , [])

    function randomHandler(e) {
        e.preventDefault();
        let selection = randomizer(characterData);
        console.log(characterData);
        setSelectedCharacter(selection);
    }

    console.log(characterData);
    
    if (!selectedCharacter) {
    return(
        <div class="initial-game-container">
            <button onClick={randomHandler} class="event-button">You will be...</button>
            <Link to="/"><button class="choose-again-button">Select Another Game</button></Link>
        </div>
    )
    } if (selectedCharacter) {
        return(
            <div>
                <div className="option-display">
                    <img 
                        src={selectedCharacter.option_img} 
                        alt={selectedCharacter.name} 
                        className="option-img" 
                        />
                    <h2>{selectedCharacter.name}</h2>
                </div>
                <div class="button-container">
                    <button onClick={randomHandler} class="do-over-button">Choose Again</button>
                    <Link to="/"><button class="choose-again-button">Select Another Game</button></Link>
                </div>
            </div>
        )
    }
}

export default Game;