import { SEARCH, CLEAR } from './types'

const initialState = {
    queue: []
}

export default (state = initialState, { type, payload } = {}) => {
    switch (type) {
        case SEARCH:
            return { queue: [...state.queue, { id: Date.now(), ...payload }] }
        case CLEAR:
            return { queue: state.queue.filter((searchbar) => searchbar.id !== payload.id) }
        default:
            return state
    }
}