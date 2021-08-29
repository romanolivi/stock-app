
const initialState = {
    id: 0,
    firstName = "",
    lastName = "",
    loggedIn = false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOG_IN':
            return {...state, id: action.id, firstName: action.firstName, lastName: action.lastName, loggedIn: true }

        case 'SIGN_UP':
            return {...state, id: action.id, firstName: action.firstName, lastName: action.lastName, loggedIn: true }

        default:
            return state;
    }
}