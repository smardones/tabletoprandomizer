import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import randomizer from '../util/randomizer';

function Game() {

    const [characterData, setCharacterData] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState();

    const { id: gameId } = useParams();


    useEffect(() => {
        fetch(`http://localhost:3001/api/playeroptions/${gameId}`, {
            
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
        <div>
            <button onClick={randomHandler}>You will be...</button>
            <Link to="/"><button>Select Another Game</button></Link>
        </div>
    )
    } if (selectedCharacter) {
        return(
            <div>
                <img src={selectedCharacter.option_img} alt={selectedCharacter.name} />
                <h2>{selectedCharacter.name}</h2>
                <button onClick={randomHandler}>Choose Again</button>
                <Link to="/"><button>Select Another Game</button></Link>
            </div>
        )
    }
}

export default Game;