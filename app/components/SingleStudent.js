import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPlanet, fetchActiveStudents } from '../store/index';
import RaisedButton from 'material-ui/RaisedButton';

class SingleStudent extends Component {

    componentDidMount(props) {

        this.props.loadPlanet(this.props.match.params.campusId);
        this.props.loadRelevantStudents(this.props.match.params.campusId)
    }

    render() {
        return (<div>
            Hi, welcome to Single Student page.
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


const SingleStudent = connect(mapStateToProps, mapDispatchToProps)(SinglePlanet)

export default SingleStudent