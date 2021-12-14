import {React, useState} from 'react'
import Image from 'next/image'
import data from '../context/games.json'

let games;

data.map((g) => {
    console.log(Object.values(g))
    let values = Object.values(g)
    games = values
})

console.log('Games', games)


function Games() {
    return (
        <div>


            {games.map((game) => (
                <div>
                    {game}
                </div>
            ))}

            {/* {games.map((week) => {
                let games = Object.values(week)
                let game;
                console.log('Games: ', games)
                for (let i = 0; i < games.length; i++) {
                    game = games[i];
                    getTeams(game);
                }
 

            })} */}

            {/* Home Team
            <div className='home-team-container'>
                <div className='team-logo-container'>
                    <Image />
                </div>
                <div className="team-ranking team-info">#13</div>
                <div className="team-odds team-info">(+200)</div>
            </div>
            VS
            <div>
                <h2>VS</h2>
            </div>
            Away Teamd
            <div className='away-team-container'>
                <div className='team-logo-container'>
                    <Image />
                </div>
                <div className="team-ranking team-info">#11</div>
                <div className="team-odds team-info">(+150)</div>
            </div> */}
        </div>
    )
}

export default Games


{/* <div key={team.id}>
<div className="home-team-container">
    <div className="team-logo-container">
        <img src={team[1].logo} height={100} width={150} />
    </div>
    <div className="team-ranking team-info">{team[1].ranking}</div>
    <div className="team-odds team-info">{team[1].odds}</div>
</div>
<div className="versus-container">
    <h2>@</h2>
</div>
<div className="away-team-container">
    <div className="team-logo-container">
        <img src={team[2].logo} height={100} width={150} />
    </div>
    <div className="team-ranking team-info">{team[2].ranking}</div>
    <div className="team-odds team-info">{team[2].odds}</div>
</div>
</div> */}