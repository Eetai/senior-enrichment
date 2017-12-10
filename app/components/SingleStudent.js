import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router-dom';
import { destroyStudent } from '../store/index'

class SingleStudent extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount(props) {

    }


    render() {
        return (<div>
            <div>Hi, welcome to single student page for {this.props.match.params.studentId} </div>
            <br /><br />
            <RaisedButton label="Update Student Info" ></RaisedButton>
            <br /><br />
            <RaisedButton label="Destroy Student" onClick={this.props.destroyThisStudent}></RaisedButton>
        </div >)
    }
}


const mapStateToProps = function (state, ownProps) {
    return {
        students: state.students
    }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        destroyThisStudent: () => { dispatch(destroyStudent(ownProps.match.params.studentId, ownProps.history)) }
    }
}

const singleStudentContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(SingleStudent))

export default singleStudentContainer