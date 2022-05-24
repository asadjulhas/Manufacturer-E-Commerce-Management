
import { signOut } from 'firebase/auth';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebaseinit';
import PageTitle from '../../hooks/PageTitle';

const Admin = () => {
  const accessToken = localStorage.getItem('accessToken')
  const {data, isLoading, refetch} = useQuery(['alluser'], () => fetch('https://boiling-brushlands-60040.herokuapp.com/all-users', {
    method: 'GET',
    headers: {
      'authorization': `Bearer ${accessToken}`
    }
  })
.then(res => res.json())
)
if(isLoading) {
  <div className="spinner">
       <Spinner animation="grow" variant="danger" />
      </div>
}


// Make admin
const makeAdmin = (email) => {
  fetch(`https://boiling-brushlands-60040.herokuapp.com/admin/${email}`, {
    method: 'PUT',
    headers: {
      'authorization': `Bearer ${accessToken}`
    }
  })
  .then(ress => ress.json())
  .then(res => {
    if(res.message) {
      toast.error(`${res.message}`, {
        position: "top-center",})
        signOut(auth);
        localStorage.removeItem("accessToken");
    }
        else if(res.result.acknowledged) {
          refetch()
          toast.success('Make admin successfully!', {
            position: "top-center",})
        }
      })

}

// Remove admin
const removeAdmin = (email) => {
  fetch(`https://boiling-brushlands-60040.herokuapp.com/remove-admin/${email}`, {
    method: 'PUT',
    headers: {
      'authorization': `Bearer ${accessToken}`
    }
  })
  .then(ress => ress.json())
      .then(res => {
        if(res.message) {
          toast.error(`${res.message}`, {
            position: "top-center",})
            signOut(auth);
            localStorage.removeItem("accessToken");
        }
            else if(res.result.acknowledged) {
          refetch()
          toast.warn('Remove admin successfully!', {
            position: "top-center",})
        }
      })

}

  return (
    <div>
    <PageTitle title='All users'/>
    <h2 className='mb-3'>Appointment users</h2>
    <div className="overflow-x-auto">
<table className="table table-normal w-full">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>ID</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {data?.map((s, index) => <tr key={s._id}>
      <th>{index+1}</th>
      <td>{s.name}</td>
      <td>{s.email}</td>
      <td>{s._id}</td>
      <td>
      <div className="indicator">
      {s.role === 'admin' ? <button onClick={()=>removeAdmin(s.email)} className="btn btn-sm bg-warning border-0 text-white">Remove admin</button> : <button onClick={()=>makeAdmin(s.email)} className="btn btn-sm bg-success border-0 text-white">Make admin</button> }
</div>
      </td>
    </tr>)}
  </tbody>
</table>
</div>
</div>
  );
};

export default Admin;