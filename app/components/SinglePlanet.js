import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { fetchPlanet, fetchActiveStudents, destroyPlanet } from '../store/index';
import SubStudentList from './SubStudentList'
import RaisedButton from 'material-ui/RaisedButton';
import UpdateCampusInfo from './UpdateCampusInfo'
import NewStudentEntry from './NewStudentEntry';


class SinglePlanet extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(props) {

        this.props.loadPlanet(this.props.match.params.campusId);
        this.props.loadRelevantStudents(this.props.match.params.campusId)
    }


    render() {


        return (<div><center>
            <div><img className="image" style={{ height: 600 }} src={this.props.planet.imgURL} /></div>
            <br />
            <div>Hi, welcome to {this.props.planet.name}</div>
            <br />
            <div>Description: {this.props.planet.description}</div>
            <br />
            <div>Campus ID: {this.props.planet.id}</div>
            <br />
            <div><u>Student Body</u></div>
            <SubStudentList />
            <br /><br />
            <RaisedButton label="Update Planet" onClick={
                () => this.props.history.push(`/PlanetsList/Update/${this.props.planet.id}`)}>
            </RaisedButton>
            <br /><br />
            <RaisedButton label="Destroy Planet" onClick={this.props.destroyThisPlanet}>
            </RaisedButton>
            <br /><br />
            <NewStudentEntry /></center>
            <br /><br />
        </div >)
    }
}

const mapStateToProps = function (state) {
    return {
        planet: state.activePlanet,
        activeStudents: state.activeStudents,
        students: state.students
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        loadPlanet: (id) => { dispatch(fetchPlanet(id)) },
        loadRelevantStudents: (id) => { dispatch(fetchActiveStudents(id)) },
        destroyThisPlanet: () => { dispatch(destroyPlanet(ownProps.match.params.campusId, ownProps.history)) }
    }
}



const singlePlanetContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SinglePlanet))

export default singlePlanetContainer

// 
