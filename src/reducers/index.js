const initialState = {
    id: null,
    username: '',
    password: '',
    loggedIn: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'LOG_IN':
            return { ...state, id: action.id, username: action.username, password: action.password, loggedIn: true }
        
        case 'SIGN_UP':
            return { ...state, id: action.id, username: action.username, password: action.password, loggedIn: true }

        default:
            return state;
    }
}