import React, { useEffect, useState } from 'react';


function Home() {

    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/game')
        .then(res => res.json())
        .then(data => setGameData(data));}
    , [])
    
    
    function formatLinkName(gameName) {
       let revisedString = gameName.replace(/\s/g, '');

       return revisedString;
    }


    
    if (!gameData) {
        return(
            <h3>Loading...</h3>
        )
    } if (gameData) {
        return(
            <div className="game-list">
            {gameData.map(game => (
                <a href={formatLinkName(game.game_name)} className="card" key={game.game_name}>
                    <img
                        src={game.cover_img}
                        alt={game.game_name}
                    />
                    <div className="card-content">
                        <h2>{game.game_name}</h2>
                    </div>
                </a>   
            ))
            }
            </div>
        )
    }
}
export default Home;