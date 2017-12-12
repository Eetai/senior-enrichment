import React from 'react';
import { connect } from 'react-redux';
import StudentsList from './StudentsList'
import NewStudentEntry from './NewStudentEntry'

function AllStudentsContainer() {

    return (
        <div>
            <StudentsList />
            <br /><br /><br /><br />
            <center><NewStudentEntry /></center>
        </div>
    );
}

export default AllStudentsContainer