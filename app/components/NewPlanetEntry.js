import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPlanet, writePlanetName, writePlanetURL, writePlanetDescription } from '../store';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'

function NewPlanetEntry(props) {

    const { newPlanetName, planetDescription, planetURL, handleSubmit, handleDescriptionChange, handleNameChange, handleURLChange } = props;

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Create a new Planet</label><br /><br />
                <TextField
                    value={newPlanetName}
                    onChange={handleNameChange}
                    className="form-control"
                    type="text"
                    name="newPlanetName"
                    placeholder="Enter planet name"
                /><br /><br />
                <label htmlFor="picture">Add a Picture</label><br />
                <TextField
                    value={planetURL}
                    onChange={handleURLChange}
                    className="form-control"
                    type="text"
                    name="planetURL"
                    placeholder="Enter the URL"
                /><br /><br />
                <label htmlFor="picture">Add a Description</label><br />
                <TextField
                    value={planetDescription}
                    onChange={handleDescriptionChange}
                    className="form-control"
                    type="text"
                    name="planetDescription"
                    placeholder="Enter a description"
                />
                <br />
                <RaisedButton label="submit" type="submit" />
            </div>
        </form >
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
        handleSubmit(event) {
            event.preventDefault();
            const name = event.target.newPlanetName.value
            const imgURL = event.target.planetURL.value
            const planetDescription = event.target.planetDescription.value
            const submitobj = { name: name, imgURL: imgURL, description: planetDescription }
            dispatch(createPlanet(submitobj));
            dispatch(writePlanetName(''));
            dispatch(writePlanetURL(''));
        }

    };

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewPlanetEntry);