import React from 'react';
import { connect } from 'react-redux';
import DataTables from 'material-ui-datatables';
import { withRouter, NavLink } from 'react-router-dom';

function SubStudentList(props) {

    const { activeStudents } = props;
    const TABLE_DATA = activeStudents
    const TABLE_COLUMNS = [
        {
            key: 'name',
            label: 'Student name'
        },
        {
            key: 'email',
            label: 'Email'
        },
        {
            key: 'GPA',
            label: 'GPA'
        }
        ,
        {
            key: 'campusId',
            label: 'CampusID'
        }
    ]

    return (
        <div>
            <DataTables
                height={'auto'}
                selectable={false}
                showRowHover={true}
                columns={TABLE_COLUMNS}
                data={TABLE_DATA}
                showCheckboxes={false}
                page={1}
                count={10}
            />

        </div >
    );
}

const mapStateToProps = function (state) {
    return {
        activeStudents: state.activeStudents
    };
};

export default withRouter(connect(mapStateToProps)(SubStudentList));