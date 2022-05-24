import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebaseinit';
import CheckAdmin from '../../hooks/CheckAdmin';
import CustomLink from '../../hooks/CustomLink';
import PageTitle from '../../hooks/PageTitle';
import './Dashboard.css'

const Dashboard = () => {
  const accessToken = localStorage.getItem('accessToken')
  const [user, loading, error] = useAuthState(auth);
  const {data: admin, isLoading, refetch} = useQuery(['checkAdmin'], () => fetch(`http://localhost:5000/check-admin/${user.email}`, {
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
  return (
    <section className="dashboard-area ptb-54">
      <PageTitle title='My Orders'/>
			<div className="container">
				<div className="row">
					<div className="col-lg-2">
						<ul className="dashboard-navigation">
							<li>
								<h3 className="active">Dashboard</h3>
							</li>

							<li>
								<CustomLink to='/dashboard'>My Profile</CustomLink>
							</li>

							{admin ? '' : <li>
								<CustomLink to='/dashboard/order'>My Orders</CustomLink>
							</li>  }

							{admin ? <li>
								<CustomLink to='/dashboard/manage-orders'>Manage Orders</CustomLink>
							</li> : ''}

							{admin ? <li>
								<CustomLink to='/dashboard/manage-orders'>Add Product</CustomLink>
							</li> : ''}

              {admin ? <li>
								<CustomLink to='/dashboard/manage-orders'>Manage Products</CustomLink>
							</li> : ''}

							{admin ? <li>
								<CustomLink to='/dashboard/manage-orders'>Make Admin</CustomLink>
							</li> : ''}
              {admin ? '' : <li>
								<CustomLink to='/dashboard/review'>Add a Review</CustomLink>
							</li> }

						</ul>
					</div>

					<div className="col-lg-10">
						
					<Outlet/>


					</div>
				</div>
			</div>
		</section>
  );
};

export default Dashboard;