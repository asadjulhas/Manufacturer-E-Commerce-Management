import { signOut } from "firebase/auth";
import { Spinner } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebaseinit";

function CheckAdmin() {
  const accessToken = localStorage.getItem('accessToken')
  const [user, loading, error] = useAuthState(auth);
  const {data, isLoading, refetch} = useQuery(['checkAdmin'], () => fetch(`http://localhost:5000/check-admin/${user.email}`, {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${accessToken}`
    }
  })
    .then(res => res.json())
  )

  if(loading || isLoading) {
    return (
      <div className="spinner">
       <Spinner animation="grow" variant="danger" />
      </div>
    )
  }
  

  return data;
}

export default CheckAdmin