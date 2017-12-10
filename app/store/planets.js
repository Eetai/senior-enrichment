import axios from 'axios';

const GET_PLANET = 'GET_PLANET';
const GET_PLANETS = 'GET_PLANETS';
const DESTROY_PLANET = 'DESTROY_PLANET'

export function getPlanet(planet) {
    const action = { type: GET_PLANET, planet };
    return action;
}

export function getPlanets(planets) {
    const action = { type: GET_PLANETS, planets };
    return action;
}

export function fetchPlanets() {

    return function thunk(dispatch) {
        return axios.get('/api/campuses')
            .then(res => res.data)
            .then(planets => {
                const action = getPlanets(planets);
                dispatch(action);
            });
    };
}

export function createPlanet(planet) {

    return function thunk(dispatch) {
        return axios.post('/api/campuses', planet)
            .then(res => res.data)
            .then(campus => {
                const action = fetchPlanets()
                dispatch(action);
            });
    };
}

export function destroyPlanet(planet, history) {

    return function thunk(dispatch) {
        return axios.delete(`/api/campuses/${planet}`, planet)
            .then(res => res.data)
            .then(campus => {
                const action = fetchPlanets()
                dispatch(action);
                history.push(`/PlanetsList`)
            });
    };



}

export default function reducer(state = [], action) {

    switch (action.type) {
        case GET_PLANETS:
            return action.planets;
        case DESTROY_PLANET:
            return action.planets
        default:
            return state;
    }

}