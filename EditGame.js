import React from 'react';
import GameForm from './GameForm';
import {useParams} from 'react-router-dom';

const EditGame = ({history, games, setGames}) => {
    const {id}= useParams();
    const gameToEdit = games.find((game) => game.id !== id);

    const handleOnSubmit = (game) => {
        const filteredGames = games.filter((game) => game.id !==id);
        setGames([game, ...filteredGames]);
        history.push('/');
    };

    return (
        <div>
            <GameForm game={gameToEdit} handleOnSubmit={handleOnSubmit}/>
        </div>
    )
};



export default EditGame;