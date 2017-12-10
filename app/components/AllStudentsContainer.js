import React from 'react';
import { connect } from 'react-redux';
import StudentsList from './StudentsList'
import NewStudentEntry from './NewStudentEntry'

function AllStudentsContainer() {

    return (
        <div>
            <StudentsList />
            <NewStudentEntry />
        </div>
    );
}

export default AllStudentsContainer