import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStudent, writeStudentFirstName, writeStudentLastName, writeStudentGPA, writeStudentCampus, writeStudentEmail } from '../store';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField'
import DropDownMenu from 'material-ui/DropDownMenu'
import MenuItem from 'material-ui/MenuItem'

function NewStudentEntry(props) {

    const { planets, studentFirstName, studentLastName, studentGPA, studentEmail, studentCampus, handleFirstNameChange, handleLastNameChange, handleCampusChange, handleSubmit, handleNameChange, handleGPAChange, handleEmailChange } = props;

    return (
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
                <label htmlFor="campus">Campus</label><br />
                <DropDownMenu name='studentCampus' value={studentCampus} onChange={handleCampusChange}>
                    {props.planets.map((planet, index) => (
                        <MenuItem value={planet.id} primaryText={planet.name} key={planet.id} />
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
            console.log(event.target.value)
            const firstName = event.target.studentFirstName.value
            const lastName = event.target.studentLastName.value
            const email = event.target.studentEmail.value
            const campus = event.target.studentCampus.value
            const GPA = event.target.studentGPA.value
            const submitobj = { firstName: firstName, lastName: lastName, email: email, campusId: campus, GPA: GPA }
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


{/* <TextField
value={studentCampus}
onChange={handleCampusChange}
className="form-control"
type="text"
name="studentCampus"
placeholder="Enter the campus id"
/> */}