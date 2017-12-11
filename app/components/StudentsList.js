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
    const { students, planets } = props;

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
                    {students.map((student, index) => (
                        <TableRow key={index}>
                            <TableRowColumn></TableRowColumn>
                            <TableRowColumn><NavLink to={`/StudentsList/${students.id}`}>{student.name}</NavLink></TableRowColumn>
                            <TableRowColumn>{student.GPA}</TableRowColumn>
                            <TableRowColumn><NavLink to={`/PlanetsList/${student.campusId}`}>{
                                planets[planets.map(v => v.id).indexOf(parseInt(student.campusId))].name
                            }</NavLink></TableRowColumn>
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
        students: state.students,
        planets: state.planets
    };
};

export default withRouter(connect(mapStateToProps)(StudentsList));