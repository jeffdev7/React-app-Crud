import React, {useState}from 'react';
import { Form,Button } from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid';

const GameForm = (props) =>{
    const [game, setGame] = useState({
        gamename: props.game ? props.game.gamename : '',
        company: props.game ? props.game.company : '',
        plataform: props.game ? props.game.plataform:'',
        price: props.book ? props.book.price : '',
        date: props.book ? props.book.date : ''
    });

    const [errorMsg, setErrorMsg] = useState('');
    const {gamename, company, price, plataform} = game;

    const handleOnSubmit = (event) =>{
        event.preventDefault();
        const values = [gamename, company, price, plataform];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) =>{
            const value = `${field}`.trim();
            return value !== '' && value !=='0';
        });

        if(allFieldsFilled){
            const game = {
                id: uuidv4(),
                gamename,
                company,
                price,
                plataform,
                date: new Date()
            };
            props.handleOnSubmit(game);
        }else{
            errorMsg = 'Preencha todos os campos';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (event) =>{
        const {name, value} = event.target;
        switch(name){
            
                case 'price':
                    if(value ===''|| value.match(/^\d{1,}(\.\d{0,2})?$/)){
                        setGame((prevState) =>({
                            ...prevState,
                            [name]:value
                        }));
                    }
                    break;
                default:
                    setGame((prevState) =>({
                        ...prevState,
                        [name]:value
                    }));
        }
    };
    return (
        <div className="main-form">
            {errorMsg && <p className="errorMsg">{errorMsg}</p>}
            <Form onSubmit={handleOnSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Game Name</Form.Label>
                    <Form.Control className="input-control" type="text" name="gamename"
                    value={gamename} placeholder="enter name of the game" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="company">
                    <Form.Label>Company</Form.Label>
                    <Form.Control className="input-control" type="text" name="company" value={company} placeholder="enter the name of the company"
                    onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="plataform">
                    <Form.Label>Plataform</Form.Label>
                    <Form.Control className="input-control" type="text" name="plataform" value={plataform}
                    placeholder="enter plataform format" onChange={handleInputChange} />
                </Form.Group>
                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control className="input-control" type="text" name="price" value={price}
                    placeholder="enter price of the book" onChange={handleInputChange}/>
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-btn">
                    Submit
                </Button>

            </Form>
        </div>
    )
}

export default GameForm;




