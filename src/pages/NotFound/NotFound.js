import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="error-area ptb-54 text-center">
			<div className="d-table">
				<div className="d-table-cell">
					<div className="error-content">
						<h1>4 <span className="red">0</span> 4</h1>
						<h3>Oops! Page Not Found</h3>
						<p>The page you were looking for could not be found.</p>

						<Link to='/' className="default-btn two">
							Return To Home Page
						</Link>
					</div>
				</div>
			</div>
		</div>
  );
};

export default NotFound;