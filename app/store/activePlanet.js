import axios from 'axios';

const SET_ACTIVE_PLANET = 'SET_ACTIVE_PLANET'


export function setActivePlanet(planet) {
    const action = { type: SET_ACTIVE_PLANET, planet };
    return action;
}

export function fetchPlanet(id) {

    return function thunk(dispatch) {
        return axios.get(`/api/campuses/${id}`)
            .then(res => res.data)
            .then(planet => {
                const action = setActivePlanet(planet);
                dispatch(action);
            });
    };
}


export default function reducer(state = { Planet: {} }, action) {

    switch (action.type) {

        case SET_ACTIVE_PLANET:
            return action.planet;
        default:
            return state;
    }

}