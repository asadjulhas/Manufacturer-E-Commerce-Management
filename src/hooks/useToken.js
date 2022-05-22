import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useToken = (userLogin) => {
  const [token, setToken] = useState('')
  useEffect(()=>{
    const getToken = async () => {
      const email = userLogin?.email;
    if(email) {
      const {data} = await axios.post('https://boiling-brushlands-60040.herokuapp.com/login', {email});
      localStorage.setItem('accessToken', data.accessToken)
      setToken(data.accessToken)
     }
    }
    getToken();
  },[userLogin])
  return [token]
};

export default useToken;