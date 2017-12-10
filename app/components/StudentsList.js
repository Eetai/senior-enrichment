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

function StudentsList(props) {
    const { students } = props;

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
                    {students.map((students, index) => (
                        <TableRow key={index}>
                            <TableRowColumn></TableRowColumn>
                            <TableRowColumn><NavLink to={`/StudentsList/${students.id}`}>{students.name}</NavLink></TableRowColumn>
                            <TableRowColumn>{students.GPA}</TableRowColumn>
                            <TableRowColumn>{students.campusId}</TableRowColumn>
                            <TableRowColumn>{students.email}</TableRowColumn>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div >
    );
}

const mapStateToProps = function (state) {
    return {
        students: state.students
    };
};

export default withRouter(connect(mapStateToProps)(StudentsList));