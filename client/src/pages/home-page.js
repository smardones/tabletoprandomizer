import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function Home() {

    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        fetch('https://xo5m7ytvrfyska00:rgb7uvd5q2m4zw1b@lyn7gfxo996yjjco.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/h4baedxe2tujhxaf/api/game')
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