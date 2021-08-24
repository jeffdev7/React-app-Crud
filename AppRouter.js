import React from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Header from '../components/header';
import AddGame from '../components/AddGame';
import GameList from '../components/GameList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditGame from '../components/EditGame';
import { Redirect } from 'react-router';

const AppRouter =()=>{

    const [games, setGames] = useLocalStorage('games', []);
    
    return (
        <BrowserRouter>
            <div>
                <Header/>
                    <div className="main-content">
                        <Switch>
                            <Route
                            render={(props) =>(
                                <GameList {...props} games={games} setGames={setGames}/>
                            )} 
                            path="/" exact={true}/>

                            <Route
                            render={(props) => (
                                <AddGame {...props} games={games} setGames={setGames} />
                            )}
                            path="/add" />

                            <Route render={(props) => (
                                <EditGame {...props} games={games} setGames={setGames}/>
                            )}
                            path="/edit/:id" />

                            <Route component={() => <Redirect to="/" />} />

                        </Switch>
                    </div>
            </div>
        </BrowserRouter>
    )
}
export default AppRouter;