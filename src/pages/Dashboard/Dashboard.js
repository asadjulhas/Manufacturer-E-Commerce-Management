import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import CustomLink from '../../hooks/CustomLink';
import PageTitle from '../../hooks/PageTitle';
import './Dashboard.css'

const Dashboard = () => {
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
								<CustomLink to='/dashboard'>My Orders</CustomLink>
							</li>
							<li>
								<CustomLink to='/dashboard/review'>Add a Review</CustomLink>
							</li>
							<li>
								<CustomLink to='/dashboard/profile'>My Profile</CustomLink>
							</li>

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