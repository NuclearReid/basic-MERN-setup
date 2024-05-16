import Signup from "../../components/SignupForm";
import LoginForm from "../../components/LoginForm";
import Profile from "../Profile";
import Auth from "../../utils/auth";

export default function Landing() {

  const isLoggedIn = Auth.loggedIn();

    return (
      <>
      {isLoggedIn ? window.location.assign('/profile'):
        <div className="d-flex">
          <LoginForm className="m-3" />
          <Signup />
        </div>}
      </>
    );

}
