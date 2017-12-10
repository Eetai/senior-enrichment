import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Toolbar } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';


function Navbar(props) {
    return (
        <Toolbar>
            <Link to="/"><RaisedButton label='Home' /></Link>
            <Link to="/StudentsList"><RaisedButton label='Students List' /></Link>
            <Link to="/PlanetsList"><RaisedButton label='Planets List' /></Link>
        </Toolbar>

    );
}

export default Navbar