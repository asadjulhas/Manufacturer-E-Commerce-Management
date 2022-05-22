import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import PageTitle from '../../hooks/PageTitle';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <section className="dashboard-area ptb-54">
      <PageTitle title='My Orders'/>
			<div className="container">
				<div className="row">
					<div className="col-lg-3">
						<ul className="dashboard-navigation">
							<li>
								<h3>Dashboard</h3>
							</li>

							<li>
								<Link to='/dashboard' className="active">My Orders</Link>
							</li>

							<li>
								<Link to='/dashboard/review'>Add a Review</Link>
							</li>

						</ul>
					</div>

					<div className="col-lg-9">
						
					<Outlet/>


					</div>
				</div>
			</div>
		</section>
  );
};

export default Dashboard;