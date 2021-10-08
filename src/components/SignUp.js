import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../actions';

const SignUp = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleUsername = (e) => {
        e.preventDefault();
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let userData = {
            username: username, 
            password: password
        }
        props.signUp(userData);
        props.history.push("/");
    }

    return (
        <div class="container h-100">
            <div class="d-flex justify-content-center h-100">
                <div class="user_card">
                    <div class="d-flex justify-content-center">
                        <div class="brand_logo_container">
                            <img src="https://cdn-images-1.medium.com/max/1200/1*fmJW9a3HTPWAsCKjnz2FRQ.png" class="brand_logo" alt="Logo" />
                        </div>
                    </div>
                    <div class="d-flex justify-content-center form_container">
                        <form onSubmit={handleSubmit}>
                            <h2 className="signing">Sign Up</h2>
                            <div className="underline"></div>
                            <div class="input-group mb-3">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-user"></i></span>
                                </div>
                                <input type="text" name="" class="form-control input_user" value={username} onChange={handleUsername} placeholder="username" />
                            </div>
                            <div class="input-group mb-2">
                                <div class="input-group-append">
                                    <span class="input-group-text"><i class="fas fa-key"></i></span>
                                </div>
                                <input type="password" name="" class="form-control input_pass" value={password} onChange={handlePassword} placeholder="password" />
                            </div>
                                <div class="d-flex justify-content-center mt-3 login_container">
                        <button type="submit" name="button" className="btn login_btn">Sign up</button>
                    </div>
                        </form>
                    </div>
            
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.username
    }
}
 

export default connect(mapStateToProps, { signUp })(SignUp);