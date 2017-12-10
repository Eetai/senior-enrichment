import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanet, fetchActiveStudents } from '../store/index';
import SubStudentList from './SubStudentList'
import RaisedButton from 'material-ui/RaisedButton';

class SinglePlanet extends Component {

    componentDidMount(props) {

        this.props.loadPlanet(this.props.match.params.campusId);
        this.props.loadRelevantStudents(this.props.match.params.campusId)
    }

    render() {
        return (<div>
            <div><img className="image" src={this.props.planet.imgURL} /></div>
            <div>Hi, welcome to {this.props.planet.name}</div>
            <div>The students here:</div>
            <SubStudentList />
            <br /><br />
            <RaisedButton label="Update Planet" ></RaisedButton>
            <br /><br />
            <RaisedButton label="Destroy Planet and all of its innocent habitants" ></RaisedButton>
        </div >)
    }
}


const mapStateToProps = function (state, ownProps) {
    return {
        planet: state.activePlanet,
        students: state.activeStudents
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        loadPlanet: (id) => { dispatch(fetchPlanet(id)) },
        loadRelevantStudents: (id) => { dispatch(fetchActiveStudents(id)) }
    }
}



const singlePlanetContainer = connect(mapStateToProps, mapDispatchToProps)(SinglePlanet)

export default singlePlanetContainer