import React, { useEffect, useRef, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from "react-toastify";
import axios from "axios";
import auth from "../../firebaseinit";
import GoogleSignin from "../../hooks/GoogleSignin";
import PageTitle from "../../hooks/PageTitle";
import useToken from "../../hooks/useToken";

const Login = () => {
  const emailRef = useRef();
  let errorElement;
  const [userLogin, loadingLogin, errorLogin] = useAuthState(auth);
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);

  const [token] = useToken(userLogin);
  const [sendPasswordResetEmail, sending, errorReset] = useSendPasswordResetEmail(
    auth
  );
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if(loadingLogin) {
    return (
      <div className="spinner">
       <Spinner animation="grow" variant="danger" />
      </div>
    )
  }
  
  if(token) {
    navigate(from, { replace: true });
  }

  // Login form
  const hadleLoginForm = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);

  }
// Reset password
const handleResetPass = (e) => {
  e.preventDefault();
  const email = emailRef.current.value;
  if(!email) {
    toast.warn('Please provide a valid email', {
      position: 'top-center'
    });
    return;
  }
  sendPasswordResetEmail(email);
}
if(error || errorReset) {
 errorElement = <p className="error_message d-block mt-3">{error?.message} {errorReset?.message}</p>
}
  return (
    <section className="section-tb-padding">
    <PageTitle title='Login' />

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="register-area">
              <div className="register-box">
                <h1>Login</h1>
                <p>Please login below account detail</p>
                <form onSubmit={hadleLoginForm}>
                  <input required ref={emailRef} type="email" name="email" placeholder="Email" />
                  <input required type="password" name="password" placeholder="Password" />
                  {errorElement}
                  <button className="btn-style1">
                    {loading ? <Spinner animation="border" variant="light"/> : 'Sign in'}
                    </button>
                  <Link onClick={handleResetPass} to='' className="re-password">
                   {sending ? <Spinner animation="border" variant="danger"/> : 'Request reset password?'}  </Link>
                </form>
              </div>
              <div className="register-account">
                <h4>Don't have an account?</h4>
                <Link to='/register' className="ceate-a">
                Create account
                </Link>
                <div className="register-info">
                  <span className="terms-link">
                    <span>*</span> Terms &amp; conditions.
                  </span>
                  <p>
                    Your privacy and security are important to us. For more
                    information on how we use your data read our 
                    <span> privacy policy</span>
                  </p>
                  <div className="text-center">
                    <GoogleSignin/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
