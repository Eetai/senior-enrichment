import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Toolbar, ToolbarGroup, ToolbarSeparator } from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';


function Navbar(props) {
    return (
        <Toolbar >
            <ToolbarGroup style={{
                float: 'none',
                marginLeft: 'auto',
                marginRight: 'auto'
            }}>

                <Link to="/StudentsList"><RaisedButton label='Students List' primary={true} /></Link>
                <ToolbarSeparator />
                <Link to="/"><RaisedButton label='Home' primary={true} /></Link>
                <ToolbarSeparator />
                <Link to="/PlanetsList"><RaisedButton label='Planets List' primary={true} /></Link>
            </ToolbarGroup>
        </Toolbar>

    );
}

export default Navbar