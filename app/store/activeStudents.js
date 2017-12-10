import axios from 'axios';

const SET_ACTIVE_STUDENTS = 'SET_ACTIVE_STUDENTS'

export function setActiveStudents(students) {
    const action = { type: SET_ACTIVE_STUDENTS, students };
    return action;
}

export function fetchActiveStudents(id) {
    return function thunk(dispatch) {
        return axios.get(`/api/students/campus/${id}`)
            .then(res => res.data)
            .then(students => {
                const action = setActiveStudents(students);
                dispatch(action);
            });
    };
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case SET_ACTIVE_STUDENTS:
            return action.students;
        default:
            return state;
    }

}