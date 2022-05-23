import axios from "axios";
import { useEffect, useState } from "react"

const useToken = (user) => {
  const [token, setToken] = useState('');
  useEffect(()=>{
    if(user?.email) {
      const logUser = {email: user?.email, name: user?.displayName}
      console.log('user inside usetoken', user.email)
      axios.put(`https://boiling-brushlands-60040.herokuapp.com/user/${user?.email}`, logUser)
      .then(res => {
        if(res.data.accessToken) {
          localStorage.setItem('accessToken', res.data.accessToken);
          setToken(res.data.accessToken);
        }
      })
    }
  },[user]);
  return [token]
}

export default useToken;