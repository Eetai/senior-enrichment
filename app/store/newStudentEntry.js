const WRITE_STUDENT_FIRST_NAME = 'WRITE_STUDENT_FIRST_NAME';
const WRITE_STUDENT_LAST_NAME = 'WRITE_STUDENT_LAST_NAME';
const WRITE_STUDENT_GPA = 'WRITE_STUDENT_GPA';
const WRITE_STUDENT_CAMPUS = 'WRITE_STUDENT_CAMPUS';
const WRITE_STUDENT_EMAIL = 'WRITE_STUDENT_EMAIL';

export function writeStudentFirstName(studentFirstName) {
    const action = { type: WRITE_STUDENT_FIRST_NAME, studentFirstName };
    return action;
}

export function writeStudentLastName(studentLastName) {
    const action = { type: WRITE_STUDENT_LAST_NAME, studentLastName };
    return action;
}

export function writeStudentGPA(studentGPA) {
    const action = { type: WRITE_STUDENT_GPA, studentGPA };
    return action;
}

export function writeStudentCampus(studentCampus) {
    const action = { type: WRITE_STUDENT_CAMPUS, studentCampus };
    return action;
}

export function writeStudentEmail(studentEmail) {
    const action = { type: WRITE_STUDENT_EMAIL, studentEmail };
    return action;
}

const newStateObj = {
    studentFirstName: '',
    studentLastName: '',
    studentGPA: '',
    studentEmail: '',
    studentCampus: ''
}

export default function reducer(state = newStateObj, action) {

    switch (action.type) {
        case WRITE_STUDENT_FIRST_NAME:
            return Object.assign({}, state, { studentFirstName: action.studentFirstName })
        case WRITE_STUDENT_LAST_NAME:
            return Object.assign({}, state, { studentLastName: action.studentLastName })
        case WRITE_STUDENT_GPA:
            return Object.assign({}, state, { studentGPA: action.studentGPA })
        case WRITE_STUDENT_EMAIL:
            return Object.assign({}, state, { studentEmail: action.studentEmail })
        case WRITE_STUDENT_CAMPUS:
            return Object.assign({}, state, { studentCampus: action.studentCampus })
        default:
            return state;
    }

}