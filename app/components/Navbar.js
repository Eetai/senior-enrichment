import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Toolbar, ToolbarGroup } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';


function Navbar(props) {
    return (
        <Toolbar>
            <ToolbarGroup style={{
                float: 'none',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>
                <Link to="/"><RaisedButton label='Home' /></Link>
                <Link to="/StudentsList"><RaisedButton label='Students List' /></Link>
                <Link to="/PlanetsList"><RaisedButton label='Planets List' /></Link>
            </ToolbarGroup>
        </Toolbar>

    );
}

export default Navbar