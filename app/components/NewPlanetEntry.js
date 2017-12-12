import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlanet, writePlanetName, writePlanetURL, writePlanetDescription } from '../store';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper';

function NewPlanetEntry(props) {

    const { newPlanetName, planetDescription, planetURL, handleSubmit, handleDescriptionChange, handleNameChange, handleURLChange } = props;

    const style = {
        width: 400,
        textAlign: 'center',
        display: 'inline-block',
    };

    return (<div><Paper style={style} zDepth={4} rounded={false}>

        <form onSubmit={props.handleSubmit}>
            <div className="form-group"><br /><br />
                <label htmlFor="name"><u>Create a new Campus</u></label><br />
                <TextField
                    value={newPlanetName}
                    onChange={handleNameChange}
                    className="form-control"
                    type="text"
                    name="newPlanetName"
                    placeholder="Enter planet name"
                /><br /><br />
                <label htmlFor="picture"><u>Add a Picture</u></label><br />
                <TextField
                    value={planetURL}
                    onChange={handleURLChange}
                    className="form-control"
                    type="text"
                    name="planetURL"
                    placeholder="Enter the URL"
                /><br /><br />
                <label htmlFor="picture"><u>Add a Description</u></label><br />
                <TextField
                    value={planetDescription}
                    onChange={handleDescriptionChange}
                    className="form-control"
                    type="text"
                    name="planetDescription"
                    placeholder="Enter a description"
                />
                <br /><br />
                <RaisedButton label="submit" type="submit" />
            </div> <br /><br /> <br />
        </form ></Paper>
    </div>
    );
}

const mapStateToProps = function (state) {
    return {
        newPlanetName: state.newPlanetEntry.newPlanetName,
        planetURL: state.newPlanetEntry.planetURL,
        planetDescription: state.newPlanetEntry.planetDescription
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleNameChange(event) {
            dispatch(writePlanetName(event.target.value));
        },
        handleURLChange(event) {
            dispatch(writePlanetURL(event.target.value));
        },
        handleDescriptionChange(event) {
            dispatch(writePlanetDescription(event.target.value));
        }
        ,
        handleSubmit: (event) => {
            event.preventDefault();
            const name = event.target.newPlanetName.value
            const imgURL = event.target.planetURL.value
            const planetDescription = event.target.planetDescription.value
            const submitobj = { name: name, imgURL: imgURL, description: planetDescription }
            dispatch(createPlanet(submitobj));
            dispatch(writePlanetName(''));
            dispatch(writePlanetURL(''));
            dispatch(writePlanetDescription(''));

        }

    };

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPlanetEntry);