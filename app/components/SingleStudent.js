import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom';
import { fetchStudent, destroyStudent } from '../store/index';


class SingleStudent extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(props) {
        this.props.loadStudent(parseInt(this.props.match.params.studentId));
    }


    render() {
        return (<div>
            <div>Student Name: {this.props.activeStudent.name} </div>
            <div>Student GPA: {this.props.activeStudent.GPA} </div>
            <div>Student email: {this.props.activeStudent.email} </div>
            <div>Campus: {this.props.activeStudent.campusId} </div>
            <br /><br />
            <RaisedButton label="Update Student" onClick={
                () => this.props.history.push(`/StudentsList/Update/${this.props.match.params.studentId}`)}>
            </RaisedButton>
            <br /><br />
            <RaisedButton label="Destroy Student" onClick={this.props.destroyThisStudent}></RaisedButton>
        </div >)
    }
}


const mapStateToProps = function (state, ownProps) {
    return {
        activeStudent: state.activeStudent,
        planets: state.planets
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        loadStudent: (id) => { dispatch(fetchStudent(id)) },
        destroyThisStudent: () => { dispatch(destroyStudent(ownProps.match.params.studentId, ownProps.history)) }
    }
}

const singleStudentContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent))

export default singleStudentContainer