import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStudent, writeStudentFirstName, writeStudentLastName, writeStudentGPA, writeStudentCampus, writeStudentEmail } from '../store';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper';

function NewStudentEntry(props) {

    const { planets, studentFirstName, studentLastName, studentGPA, studentEmail, studentCampus, handleFirstNameChange, handleLastNameChange, handleCampusChange, handleSubmit, handleNameChange, handleGPAChange, handleEmailChange } = props;

    const style = {
        width: 400,
        textAlign: 'center',
        display: 'inline-block',
    };

    return (<div><Paper style={style} zDepth={4} rounded={false}>
        <br />
        <div><u>Add a new Student</u></div>
        <br />
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">First name</label><br />
                <TextField
                    value={studentFirstName}
                    onChange={handleFirstNameChange}
                    className="form-control"
                    type="text"
                    name="studentFirstName"
                    placeholder="Enter first name"
                /><br />
                <label htmlFor="name">Last name</label><br />
                <TextField
                    value={studentLastName}
                    onChange={handleLastNameChange}
                    className="form-control"
                    type="text"
                    name="studentLastName"
                    placeholder="Enter last name"
                /><br />
                <label htmlFor="GPA">Add a GPA</label><br />
                <TextField
                    value={studentGPA}
                    onChange={handleGPAChange}
                    className="form-control"
                    type="text"
                    name="studentGPA"
                    placeholder="Enter the GPA"
                />
                <br />
                <label htmlFor="email">Add an Email</label><br />
                <TextField
                    value={studentEmail}
                    onChange={handleEmailChange}
                    className="form-control"
                    type="text"
                    name="studentEmail"
                    placeholder="Enter the email"
                />
                <br />
                <label htmlFor="Campus">Student's campus</label><br />
                <TextField
                    value={studentCampus}
                    onChange={handleCampusChange}
                    className="form-control"
                    type="text"
                    name="studentCampus"
                    placeholder="Enter the campus id"
                />

                <br />
                <RaisedButton label="submit" type="submit" />
            </div> <br /><br />
        </form ></Paper>
    </div >
    );
}

const mapStateToProps = function (state) {
    return {
        studentFirstName: state.newStudentEntry.studentFirstName,
        studentLastName: state.newStudentEntry.studentLastName,
        studentGPA: state.newStudentEntry.studentGPA,
        studentEmail: state.newStudentEntry.studentEmail,
        studentCampus: state.newStudentEntry.studentCampus,
        planets: state.planets
    };
};




const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleFirstNameChange(event) {
            dispatch(writeStudentFirstName(event.target.value));
        },
        handleLastNameChange(event) {
            dispatch(writeStudentLastName(event.target.value))
        },
        handleGPAChange(event) {
            dispatch(writeStudentGPA(event.target.value));
        }
        ,
        handleCampusChange(event, index, value) {
            dispatch(writeStudentCampus(value));
        }
        ,
        handleEmailChange(event) {
            dispatch(writeStudentEmail(event.target.value));
        }
        ,
        handleSubmit(event) {

            event.preventDefault();
            const firstName = event.target.studentFirstName.value
            const lastName = event.target.studentLastName.value
            const email = event.target.studentEmail.value
            const campus = event.target.studentCampus.value
            const GPA = event.target.studentGPA.value
            const submitobj = { firstName: firstName, lastName: lastName, email: email, campusId: campus, GPA: GPA }
            console.log(submitobj)
            dispatch(createStudent(submitobj));
            dispatch(writeStudentFirstName(''));
            dispatch(writeStudentLastName(""));
            dispatch(writeStudentGPA(''));
            dispatch(writeStudentCampus(''));
            dispatch(writeStudentEmail(''));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewStudentEntry);


{/*  */ }