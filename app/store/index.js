import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import loggingMiddleware from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import students from './students'
import newPlanetEntry from './newPlanetEntry'
import newStudentEntry from './newStudentEntry'
import planets from './planets'
import activePlanet from './activePlanet'
import activeStudents from './activeStudents'
import activeStudent from './activeStudent'

const reducer = combineReducers({
    students, planets, newPlanetEntry, newStudentEntry, activePlanet, activeStudents, activeStudent
});

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
        thunkMiddleware,
        loggingMiddleware
    ))
);

export default store;

// export action creators
export * from './planets';
export * from './students';
export * from './newPlanetEntry';
export * from './newStudentEntry'
export * from './activePlanet'
export * from './activeStudents'
export * from './activeStudent'