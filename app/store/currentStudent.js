import axios from 'axios';

const SET_CURRENT_STUDENT = 'SET_CURRENT_STUDENT'


export function setCurrentStudent(student) {
    const action = { type: SET_ACTIVE_PLANET, student };
    return action;
}