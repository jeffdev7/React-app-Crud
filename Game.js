import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Game =({
    id,
    gamename,
    company,
    price,
    plataform,
    date,
    handleRemoveGame
}) => {
    const history = useHistory();
    return (
        <Card style={{width:'18rem'}} className="game">
            <Card.Body>
                <Card.Title className="game-title">{gamename}</Card.Title>
                <div className="game-details">
                    <div>Company: {company}</div>
                    <div>plataform: {plataform}</div>
                    <div>Price: {price}</div>
                    <div>Date: {new Date(date).toDateString()}</div>
                </div>
                <Button variant="primary" onClick={() => history.push(`/edit/${id}`)}>Edit</Button>{' '}
                <Button variant="danger" onClick={() => handleRemoveGame(id)}>
                    Delete
                </Button>
            </Card.Body>
        </Card>
    )
}

export default Game;