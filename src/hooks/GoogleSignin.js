import React from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebaseinit';

const GoogleSignin = () => {
  
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <>
      <Button onClick={()=> signInWithGoogle()} className="btn-style2 google_signin">{loading ? <Spinner animation="border" variant="light"/> : 'Signin with google'} </Button>
    </>
  );
};

export default GoogleSignin;