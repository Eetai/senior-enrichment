import axios from 'axios';

const GET_STUDENT = 'GET_STUDENT';
const GET_STUDENTS = 'GET_STUDENTS';

export function getStudent(student) {
    const action = { type: GET_STUDENT, student };
    return action;
}

export function getStudents(students) {
    const action = { type: GET_STUDENTS, students };
    return action;
}

export function fetchStudents() {

    return function thunk(dispatch) {
        return axios.get('/api/students')
            .then(res => res.data)
            .then(students => {
                const action = getStudents(students);
                dispatch(action);
            });
    };
}

export function fetchSomeStudents(campusID) {

    return function thunk(dispatch) {
        return axios.get(`api/students/campus/${campusID}`)
            .then(res => res.data)
            .then(students => {
                const action = getStudents(students);
                dispatch(action);
            });
    };
}


export function createStudent(planet) {

    return function thunk(dispatch) {
        return axios.post('/api/students', planet)
            .then(res => res.data)
            .then(campus => {
                const action = fetchStudents()
                dispatch(action);
            });
    };
}


export default function reducer(state = [], action) {

    switch (action.type) {

        case GET_STUDENTS:
            return action.students;

        default:
            return state;
    }

}