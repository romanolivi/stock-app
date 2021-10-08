import axios from "axios";

export const signUp = (userData) => async dispatch => {
    await axios.post('http://localhost:8080/users', userData)
    .then((resp) => dispatch({type: 'SIGN_UP', username: resp.data.username, password: resp.data.password, id: resp.data.id}))
}

export const logIn = (userData) => dispatch => {
    axios.get(`http://localhost:8080/users`)
    .then( resp => resp.data.find(data => data.username === userData.username && data.password === userData.password))
    .then((resp) => dispatch({type: 'LOG_IN', username: resp.username, password: resp.password, id: resp.id}))
}


// export const signUp = userData => {
//     return (dispatch) => {
//         axios.post('http://localhost:8080/users', { userData })
//         .then(response => {
//             console.log(response);
//             dispatch({
//                 type: 'SIGN_UP',
//                 payload: response.data
//             })
//             .catch( error => {
//                 console.log(error);
//             })
//         })
//     }
// }
