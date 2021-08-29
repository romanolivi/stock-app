import axios from "axios";

export default signUp = (userData) => dispatch => {
    axios.post('http://localhost:8080/users', userData)
    .then((resp) => dispatch({type: 'SIGN_UP', firstName: resp.data.firstName, lastName: resp.data.lastName, id: resp.data.id}))

}

export default logIn = (userData) => dispatch => {
    axios.get('http://localhost:8080/users', userData)
    .then((resp) => resp.data.find(data => data.id === userData.id))
    .then((resp) => dispatch({type: 'LOG_IN', firstName: resp.firstName, lastName: resp.lastName, id: resp.id}))
    .catch(error => { console.log('No such user')})
}