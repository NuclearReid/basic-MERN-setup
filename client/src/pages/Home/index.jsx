import Signup from '../../components/SignupForm';
import LoginForm from '../../components/LoginForm';
import Auth from '../../utils/auth';

export default function Home() {

    const isLoggedIn = Auth.loggedIn();

    if(!isLoggedIn){
        return (
            <>
                <div className='d-flex'>
                    <LoginForm className='m-3' />
                    <Signup />
                </div>
            </>
        )
    }

    return (
        <>
        {isLoggedIn ? (window.location.assign('/profile')
        ): <Signup />}
        </>
    )
}