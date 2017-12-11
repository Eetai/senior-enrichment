import axios from 'axios';

const SET_ACTIVE_STUDENT = 'SET_ACTIVE_STUDENT'


export function setActiveStudent(student) {
    const action = { type: SET_ACTIVE_STUDENT, student };
    return action;
}

export function fetchStudent(id) {

    return function thunk(dispatch) {
        return axios.get(`/api/students/${id}`)
            .then(res => res.data)
            .then(student => {
                const action = setActiveStudent(student);
                dispatch(action);
            });
    };
}


export default function reducer(state = { Student: {} }, action) {

    switch (action.type) {

        case SET_ACTIVE_STUDENT:
            return action.student;
        default:
            return state;
    }

}