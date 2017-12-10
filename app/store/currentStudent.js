import axios from 'axios';

const SET_ACTIVE_PLANET = 'SET_ACTIVE_PLANET'


export function setActivePlanet(planet) {
    const action = { type: SET_ACTIVE_PLANET, planet };
    return action;
}