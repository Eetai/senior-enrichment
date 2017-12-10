import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store, { fetchStudents, fetchPlanets } from '../store'
import Navbar from './Navbar'
import StudentsList from './StudentsList'
import PlanetsList from './PlanetsList'
import NewPlanetEntry from './NewPlanetEntry'
import NewStudentEntry from './NewStudentEntry'
import Home from './Home'
import SinglePlanet from './SinglePlanet'
import SingleStudent from './SingleStudent'
import AllStudentsContainer from './AllStudentsContainer'

export default class App extends Component {

    componentDidMount() {
        const studentsThunk = fetchStudents();
        const planetsThunk = fetchPlanets();
        store.dispatch(studentsThunk);
        store.dispatch(planetsThunk);
    }

    render() {
        return (
            <div>
                <div> <Navbar /></div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/PlanetsList" component={PlanetsList} />
                    <Route exact path="/StudentsList" component={AllStudentsContainer} />
                    <Route path="/NewPlanetEntry" component={NewPlanetEntry} />
                    <Route path="/NewStudentEntry" component={NewStudentEntry} />
                    <Route exact path="/PlanetsList/:campusId" component={SinglePlanet} />
                    <Route exact path="/StudentsList/:studentId" component={SingleStudent} />
                    <Route component={Home} />
                </Switch>
            </div>

        );
    }
}