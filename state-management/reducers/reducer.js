import { combineReducers } from 'redux'

const initialState = {
    menuIcon: 'bar'
}

const menuIconReducer = (state = initialState, { type }) => {
    switch (type) {
        case 'BAR':
            return { ...state, menuIcon: 'bar' }
        case 'CLEAR':
            return { ...state, menuIcon: 'clear' }
        default:
            return state
    }
}

const reducers = {
    menuIcon: menuIconReducer,
}

export default combineReducers(reducers)
