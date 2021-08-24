import React from 'react';
import GameForm from './GameForm';

const AddGame = ({history, games, setGames}) =>{
    const handleOnSubmit = (game) =>{
        setGames([game, ...games]);
        history.push('/');

    };

    return(
        <React.Fragment>
            <GameForm handleOnSubmit={handleOnSubmit}/>
        </React.Fragment>
    )
}

export default AddGame;