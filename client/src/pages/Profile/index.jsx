import { useEffect } from 'react';
import Auth from '../../utils/auth';

import Landing from '../Landing'

import { QUERY_ME } from '../../utils/queries';

import { useMutation, useQuery } from '@apollo/client';



export default function TestPage() {

    const { loading, data} = useQuery(QUERY_ME);
    const userEmail = data?.me?.email;

    const isLoggedIn = Auth.loggedIn();

    const logoutOnClick = () => {
        Auth.logout();
    }

    // fix this!
    return (
        <>
            {isLoggedIn ? (
                <>
                <h1>User's email: {userEmail}</h1>
                <button className='primary' onClick={logoutOnClick}>
                    Logout!
                </button> 
            </>
            ):( 
                window.location.assign('/')
            )}
        </>
    )
}