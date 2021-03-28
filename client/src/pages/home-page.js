import React from 'react';

function Home() {

    const gameData = getGames();

    async function getGames() {
        let games;
        await fetch('http://localhost:3001/api/game', {
        method: 'GET'
    })
        .then(res => res.json())
        .then(data => games = data)
        .then(() => console.log(games))
        .catch(err => console.log(err));
    }

    return(
        <div className="game-list">
            <h1>Hello</h1>
        </div>
    )
}

export default Home;