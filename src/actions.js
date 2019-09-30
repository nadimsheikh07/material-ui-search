import { SEARCH, CLEAR } from './types'

const search = (payload) => ({
    type: SEARCH,
    payload
})

const clear = (payload) => ({
    type: CLEAR,
    payload
})

export default { search, clear }