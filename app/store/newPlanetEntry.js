const WRITE_PLANET_NAME = 'WRITE_PLANET_NAME';
const WRITE_PLANET_URL = 'WRITE_PLANET_URL';
const WRITE_PLANET_DESCRIPTION = 'WRITE_PLANET_DESCRIPTION'

export function writePlanetName(newPlanetName) {
    const action = { type: WRITE_PLANET_NAME, newPlanetName };
    return action;
}

export function writePlanetURL(planetURL) {
    const action = { type: WRITE_PLANET_URL, planetURL };
    return action;
}

export function writePlanetDescription(planetDescription) {
    const action = { type: WRITE_PLANET_DESCRIPTION, planetDescription };
    return action;
}

const newStateObj = {
    newPlanetName: '',
    planetURL: '',
    planetDescription: ''
}

export default function reducer(state = newStateObj, action) {

    switch (action.type) {
        case WRITE_PLANET_NAME:
            return Object.assign({}, state, { newPlanetName: action.newPlanetName })
        case WRITE_PLANET_URL:
            return Object.assign({}, state, { planetURL: action.planetURL })
        case WRITE_PLANET_DESCRIPTION:
            return Object.assign({}, state, { planetDescription: action.planetDescription })
        default:
            return state;
    }

}