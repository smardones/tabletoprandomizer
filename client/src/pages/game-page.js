import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import randomizer from '../util/randomizer';

function Game() {

    const [characterData, setCharacterData] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState();
    const [currentGame, setCurrentGame] = useState();

    const { id: gameId } = useParams();


    useEffect(() => {
        fetch(`https://agile-inlet-31690.herokuapp.com/api/playeroptions/${gameId}`, {
            
        })
        .then(res => res.json())
        .then(data => setCharacterData(data));}
    , []);

    useEffect(() => {
        fetch(`https://agile-inlet-31690.herokuapp.com/api/game/${gameId}`, {
            
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setCurrentGame(data)
        });}
    , []);

    function randomHandler(e) {
        e.preventDefault();
        let selection = randomizer(characterData);
        setSelectedCharacter(selection);
    }

    
    console.log(characterData);
    
    
    if (!currentGame) {
        return ( <h2></h2> )
    } if (!selectedCharacter && currentGame) {
    return(
        <div>
            <h2 className="game-title">{currentGame[0].game_name}</h2>
            <div class="initial-game-container">
                <button onClick={randomHandler} class="event-button">
                    <h3>You will be...</h3>
                </button>
                <Link to="/"><button className="choose-again-button">Select Another Game</button></Link>
            </div>
        </div>
    )
    } if (selectedCharacter) {
        return(
            <div>
                <h2 className="game-title">{currentGame[0].game_name}</h2>
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