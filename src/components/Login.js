import React, { useState } from 'react';

const Login = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    


    return (
        <main className="content">
            <form onSubmit={(event => handleSubmit(event))}>
                <div className="mb-3">
                    <label for="firstName" class="form-label">First Name</label>
                    <input type="firstName" class="form-control" />
                </div>
                <div className="mb-3">
                    <label for="lastName" class="form-label">Last Name</label>
                    <input type="lastName" class="form-control" onChange/>
                </div>
                <button type="submit" className="btn btn-secondary">Log In</button>
            </form>
        </main>
    )
}