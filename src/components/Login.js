import React, { useState } from 'react';
// import axios from 'axios';
import { connect } from 'react-redux';
import { logIn } from '../actions';
// import { Link } from 'react-router-dom';

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault();
        let userData = {
            username: username,
            password: password
        }
        props.logIn(userData);
    }

    const handleUsername = (e) => {
        e.preventDefault();
        setUsername(e.target.value)
    }

    const handlePassword = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
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
							<h2 className="signing">Log In</h2>
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
						<button type="submit" name="button" className="btn login_btn">Login</button>
					</div>
						</form>
					</div>
			
					<div class="mt-4">
						<div class="d-flex justify-content-center links">
							Don't have an account? <a href="/sign" class="ml-2">Sign Up</a>
						</div>
						<div class="d-flex justify-content-center links">
							<a href="#">Forgot your password?</a>
						</div>
					</div>
				</div>
			</div>
		</div>
    )
}

export default connect(null, { logIn })(Login);