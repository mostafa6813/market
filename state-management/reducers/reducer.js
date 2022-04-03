import { combineReducers } from 'redux'

const initialState = {
    menuIcon: 'bar'
}

const menuIconReducer = (state = initialState, { type }) => {
    switch (type) {
        case 'BAR':
            return { menuIcon: 'bar' }
        case 'CLEAR':
            return { menuIcon: 'clear' }
        default:
            return state
    }
}

const reducers = {
    menuIcon: menuIconReducer,
}

export default combineReducers(reducers)
