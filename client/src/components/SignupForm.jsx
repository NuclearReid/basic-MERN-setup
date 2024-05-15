import { useState } from 'react';
import {useMutation} from '@apollo/client';

import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

export default function Signup() {
    const [formState, setFormState ] = useState({
        email: '',
        password: '',
    });

    const [addUser, {error}] = useMutation(ADD_USER);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const mutationResponse = await addUser({
                variables: {
                    email: formState.email,
                    password: formState.password
                }
            });
            const token = mutationResponse.data.addUser.token;
            Auth.login(token);
            window.location.assign('/loggedIn')

        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    }


    return (
        <>
        <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputUsername" className="form-label">email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="emailField" 
                        aria-describedby="emailHelp" 
                        name='email'
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="exampleInputPassword1" 
                        className="form-label">
                            Password
                    </label>
                    <input 
                        type="password" 
                        className="form-control"
                        name='password'
                        id="exampleInputPassword1"
                        onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary">
                        Submit
                </button>
            </form>

        </>
    )
}