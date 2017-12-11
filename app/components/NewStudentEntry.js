import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStudent, writeStudentName, writeStudentGPA, writeStudentCampus, writeStudentEmail } from '../store';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

function NewStudentEntry(props) {

    const { planets, studentName, studentGPA, studentEmail, studentCampus, handleCampusChange, handleSubmit, handleNameChange, handleGPAChange, handleEmailChange } = props;

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Create a new Student</label><br /><br />
                <TextField
                    value={studentName}
                    onChange={handleNameChange}
                    className="form-control"
                    type="text"
                    name="studentName"
                    placeholder="Enter student name"
                /><br /><br />
                <label htmlFor="picture">Add a GPA</label><br />
                <TextField
                    value={studentGPA}
                    onChange={handleGPAChange}
                    className="form-control"
                    type="text"
                    name="studentGPA"
                    placeholder="Enter the GPA"
                />
                <br />
                <label htmlFor="picture">Add an Email</label><br />
                <TextField
                    value={studentEmail}
                    onChange={handleEmailChange}
                    className="form-control"
                    type="text"
                    name="studentEmail"
                    placeholder="Enter the email"
                />
                <br />
                <label htmlFor="picture">Add a Campus</label><br />
                <DropDownMenu value={props.studentCampus} onChange={handleCampusChange}>
                    {props.planets.map((planet, index) => (
                        <MenuItem value={planet.id} primaryText={planet.name} key={planet.id} name='planetId' />
                    ))}
                </DropDownMenu>

                <br />
                <RaisedButton label="submit" type="submit" />
            </div>
        </form >
    );
}

const mapStateToProps = function (state) {
    return {
        studentName: state.newStudentEntry.studentName,
        studentGPA: state.newStudentEntry.studentGPA,
        studentEmail: state.newStudentEntry.studentEmail,
        studentCampus: state.newStudentEntry.studentCampus,
        planets: state.planets
    };
};




const mapDispatchToProps = function (dispatch, ownProps) {
    return {
        handleNameChange(event) {
            dispatch(writeStudentName(event.target.value));
        },
        handleGPAChange(event) {
            dispatch(writeStudentGPA(event.target.value));
        }
        ,
        handleCampusChange(event, value) {
            console.log(event, value)
            console.log(ownProps)
            dispatch(writeStudentCampus(event.target.value));
        }
        ,
        handleEmailChange(event) {
            dispatch(writeStudentEmail(event.target.value));
        }
        ,
        handleSubmit(event) {
            event.preventDefault();
            const name = event.target.studentName.value
            const email = event.target.studentEmail.value
            const campus = event.target.studentCampus.value
            const GPA = event.target.studentGPA.value
            const submitobj = { name: name, email: email, campusId: campus, GPA: GPA }
            dispatch(createStudent(submitobj));
            dispatch(writeStudentName(''));
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


{/* <TextField
value={studentCampus}
onChange={handleCampusChange}
className="form-control"
type="text"
name="studentCampus"
placeholder="Enter the campus id"
/> */}