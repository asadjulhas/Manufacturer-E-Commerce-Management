import { Navigate, useLocation } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Spinner } from "react-bootstrap";
import { toast } from "react-toastify";
import { sendEmailVerification } from "firebase/auth";
import auth from "./firebaseinit";

function RequireAuth({ children }) {

  let location = useLocation();
  const [user, loading, error] = useAuthState(auth);
  if(loading) {
    return (
      <div className="spinner">
       <Spinner animation="grow" variant="danger" />
      </div>
    )
  }

  const sendVerifactionEmail = () => {
    sendEmailVerification(auth.currentUser)
    .then(()=>{
      toast.success('Email verification sent!', {
        position: 'top-center'
      })
    })
  }
  
  // if(user?.providerData[0]?.providerId === 'password' && !user.emailVerified) {
  //   return(
  //     <div className="mt-5 d-block">
  //       <div className="verified_email py-5 px-4 bg-info w-50 mx-auto rounded mb-5">
  //       <h2 className="text-danger mb-3">
  //         Please Verify your email
  //       </h2>
  //         <button onClick={sendVerifactionEmail} className="btn btn-success">Send Verification Email</button>
  //     </div>
  //     </div>
  //   )
  // }

  if (!user?.uid) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default RequireAuth;