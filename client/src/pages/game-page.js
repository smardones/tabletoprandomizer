import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Game() {

    const [characterData, setCharacterData] = useState([]);

    const { id: gameId } = useParams();

    console.log(gameId)

    useEffect(() => {
        fetch(`http://localhost:3001/api/playeroptions/${gameId}`, {
            
        })
        .then(res => res.json())
        .then(data => setCharacterData(data));}
    , [])

    console.log(characterData);
    
    return(
        <div>
            <h2>Disney Villainous Page</h2>
        </div>
    )
}

export default Game;