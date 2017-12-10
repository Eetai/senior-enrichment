import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink, withRouter } from 'react-router-dom';
import { fetchPlanet, fetchActiveStudents, destroyPlanet } from '../store/index';
import SubStudentList from './SubStudentList'
import RaisedButton from 'material-ui/RaisedButton';

class SinglePlanet extends Component {

    constructor(props) {
        super(props)
    }

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
            <RaisedButton label="Update Planet" >
                <NavLink to={`/PlanetsList/Update/${this.props.planet.id}`}></NavLink>
            </RaisedButton>
            <br /><br />
            <RaisedButton label="Destroy Planet" onClick={this.props.destroyThisPlanet}>

            </RaisedButton>
        </div >)
    }
}

const mapStateToProps = function (state, ownProps) {
    return {
        planet: state.activePlanet,
        students: state.activeStudents
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