import { useState } from 'react';
import { useMutation } from '@apollo/client';

import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

export default function Login() {
    const [ formState, setFormState ] = useState({
        loginEmail: '',
        loginPassword: ''
    });
    const [login, {error}] = useMutation(LOGIN);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
        
            const mutationResponse = await login({
                variables: {
                    email: formState.loginEmail,
                    password: formState.loginPassword
                }
            });
            const token = mutationResponse.data.login.token;
            Auth.login(token);
            console.log(token);
        } catch( error ) {
            console.error(error);
        }
     }

     const handleChange = (event) => {
        const {name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
     };

    return (
        <>
        <form onSubmit={handleFormSubmit}>
            Login
                <div className="mb-3">
                    <label htmlFor="exampleLoginInputEmail" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="lgoinEmailField" 
                        aria-describedby="loginEmailHelp" 
                        name='loginEmail'
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-3">
                    <label 
                        htmlFor="inputPassword1" 
                        className="form-label">
                            Password
                    </label>
                    <input 
                        type="password" 
                        className="form-control"
                        name='loginPassword'
                        id="exampleLoginInputPassword1"
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