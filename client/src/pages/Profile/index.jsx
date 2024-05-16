import { useEffect } from 'react';
import Auth from '../../utils/auth';

import { QUERY_ME } from '../../utils/queries';

import { useMutation, useQuery } from '@apollo/client';



export default function TestPage() {

    const { loading, data} = useQuery(QUERY_ME);
    const userEmail = data?.me?.email;

    const logoutOnClick = () => {
        Auth.logout();
    }

    return (
        <>
        <h1>User's email: {userEmail}</h1>

        <button className='primary' onClick={logoutOnClick}>
            Logout!
        </button>
        </>
    )
}