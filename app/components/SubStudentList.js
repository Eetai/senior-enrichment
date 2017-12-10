import React from 'react';
import { connect } from 'react-redux';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import { withRouter, NavLink } from 'react-router-dom';

function SubStudentsList(props) {
    const { activeStudents } = props;

    return (
        < div >
            <Table
            >
                <TableHeader
                >      <TableRow>
                        <TableHeaderColumn tooltip=""></TableHeaderColumn>
                        <TableHeaderColumn tooltip="Name">Name</TableHeaderColumn>
                        <TableHeaderColumn tooltip="GPA">GPA</TableHeaderColumn>
                        <TableHeaderColumn tooltip="CampusID">CampusID</TableHeaderColumn>
                        <TableHeaderColumn tooltip="Email">Email</TableHeaderColumn>
                    </TableRow>

                </TableHeader>
                <TableBody>
                    {activeStudents.map((student, index) => (
                        <TableRow key={index}>
                            <TableRowColumn></TableRowColumn>
                            <TableRowColumn><NavLink to={`/StudentsList/${student.id}`}>{student.name}</NavLink></TableRowColumn>
                            <TableRowColumn>{student.GPA}</TableRowColumn>
                            <TableRowColumn>{student.campusId}</TableRowColumn>
                            <TableRowColumn>{student.email}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div >
    );
}

const mapStateToProps = function (state) {
    return {
        activeStudents: state.activeStudents
    };
};

export default withRouter(connect(mapStateToProps)(SubStudentsList));