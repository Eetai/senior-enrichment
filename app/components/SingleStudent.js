import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { NavLink, withRouter } from 'react-router-dom';
import { fetchStudent, destroyStudent } from '../store/index';
import Paper from 'material-ui/Paper';


class SingleStudent extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(props) {
        this.props.loadStudent(parseInt(this.props.match.params.studentId));
    }

    render() {


        const style = {
            width: 400,
            textAlign: 'center',
            display: 'inline-block',
        };

        return (<div><center><Paper style={style} zDepth={4} rounded={false}>
            <br /><br />
            <div>Student Name: {this.props.activeStudent.fullName}  </div>
            <div>Student GPA: {this.props.activeStudent.GPA} </div>
            <div>Student email: {this.props.activeStudent.email} </div>
            <div>Campus: <NavLink to={`/PlanetsList/${this.props.activeStudent.campusId}`}>
                {this.props.activeStudent.campusId}
            </NavLink> </div>
            <br /><br />
            <RaisedButton label="Update Student" onClick={
                () => this.props.history.push(`/StudentsList/Update/${this.props.match.params.studentId}`)}>
            </RaisedButton>
            <br /><br />
            <RaisedButton label="Destroy Student" onClick={this.props.destroyThisStudent}></RaisedButton>
            <br /><br />
        </Paper>  </center>
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