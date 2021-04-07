import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {

    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        fetch('https://agile-inlet-31690.herokuapp.com/api/game')
        .then(res => res.json())
        .then(data => setGameData(data));}
    , [])
    

    
    if (!gameData) {
        return(
            <h3>Loading...</h3>
        )
    } if (gameData) {
        return(
            <div className="game-list">
            {gameData.map(game => (
                <Link to={`/game/${game.id}`} className="card" key={game.game_name}>
                    <span></span>
                        <img
                            src={game.cover_img}
                            alt={game.game_name}
                            className="game-img"
                        />
                        <div className="card-content">
                            <h2>{game.game_name}</h2>
                        </div>
                </Link>
            ))
            }
            </div>
        )
    }
}
export default Home;