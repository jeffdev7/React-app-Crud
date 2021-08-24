import React from 'react';
import _ from 'lodash';
import Game from './Game';

const GameList = ({games, setGames}) => {

    const handleRemoveGame = (id) =>{
        setGames(games.filter((game) => game.id !== id));
    };

    return (
        <React.Fragment>
            <div className="game-list">
                {!_.isEmpty(games) ? (
                    games.map((game) =>(
                        <Game key={game.id} {...game} handleRemoveGame={handleRemoveGame} />
                    ))
                ) : (
                    <p className="message">No games available.</p>
                )}
            </div>
        </React.Fragment>
    )
}
export default GameList;

