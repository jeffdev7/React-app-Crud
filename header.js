import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () =>{
    return (
        <header>
            <h1>Game it on!</h1>
            <hr/>
            <div className="links">
                <NavLink to="/" className="link" activeClassName="active" exact>
                    Games List <br/>
                </NavLink>
                <NavLink to="/add" className="link" activeClassName="active">
                    Add game
                </NavLink>
            </div>
        </header>
    )
}

export default Header;

//dependencies
// --save react-bootstrap bootstrap@3
//lodash@4
//node-sass@4.14.1
//react-router-dom@5.2.0
//uuid@8.3.2
//first create index and styles files and then the folders.