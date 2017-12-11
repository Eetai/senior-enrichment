import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editStudent, writeStudentFirstName, writeStudentLastName, writeStudentGPA, writeStudentCampus, writeStudentEmail } from '../store';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'

function UpdateStudentInfo(props) {

    const { studentFirstName, studentLastName, studentGPA, studentEmail, studentCampus, handleCampusChange, handleSubmit, handleFirstNameChange, handleLastNameChange, handleGPAChange, handleEmailChange } = props;

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Edit Student First Name</label><br /><br />
                <TextField
                    value={studentFirstName}
                    onChange={handleFirstNameChange}
                    className="form-control"
                    type="text"
                    name="studentFirstName"
                    placeholder={props.activeStudent.firstName}
                /><br />
                <label htmlFor="name">Edit Student Last Name</label><br /><br />
                <TextField
                    value={studentLastName}
                    onChange={handleLastNameChange}
                    className="form-control"
                    type="text"
                    name="studentLastName"
                    placeholder={props.activeStudent.lastName}
                /><br />
                <label htmlFor="picture">Edit GPA</label><br />
                <TextField
                    value={studentGPA}
                    onChange={handleGPAChange}
                    className="form-control"
                    type="text"
                    name="studentGPA"
                    placeholder={props.activeStudent.GPA}
                />
                <br />
                <label htmlFor="picture">Edit Email</label><br />
                <TextField
                    value={studentEmail}
                    onChange={handleEmailChange}
                    className="form-control"
                    type="text"
                    name="studentEmail"
                    placeholder={props.activeStudent.email}
                />
                <br />
                <label htmlFor="picture">Edit Campus</label><br />
                <TextField
                    value={studentCampus}
                    onChange={handleCampusChange}
                    className="form-control"
                    type="text"
                    name="studentCampus"
                    placeholder={props.activeStudent.campus}
                />
                <br />
                <RaisedButton label="submit" type="submit" />
            </div>
        </form >
    );
}

const mapStateToProps = function (state) {
    return {
        activeStudent: state.activeStudent,
        studentFirstName: state.newStudentEntry.studentFirstName,
        studentLastName: state.newStudentEntry.studentLastName,
        studentGPA: state.newStudentEntry.studentGPA,
        studentEmail: state.newStudentEntry.studentEmail,
        studentCampus: state.newStudentEntry.studentCampus
    };
};

const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleFirstNameChange(event) {
            dispatch(writeStudentFirstName(event.target.value));
        },
        handleLastNameChange(event) {
            dispatch(writeStudentLastName(event.target.value));
        },
        handleGPAChange(event) {
            dispatch(writeStudentGPA(event.target.value));
        }
        ,
        handleCampusChange(event) {
            dispatch(writeStudentCampus(event.target.value));
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
            const id = parseInt(ownProps.match.params.studentId)
            const submitobj = { id: id, firstName: firstName, email: email, campusId: campus, GPA: GPA }
            dispatch(editStudent(submitobj, ownProps.history));
            dispatch(writeStudentFirstName(''));
            dispatch(writeStudentLastName(''));
            dispatch(writeStudentGPA(''));
            dispatch(writeStudentCampus(''));
            dispatch(writeStudentEmail(''));
        }
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateStudentInfo);