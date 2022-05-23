import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebaseinit';

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const img = user.photoURL || 'https://templates.envytheme.com/ehay/default/assets/images/profile-img.jpg';
  return (
    <div className="profile-bar">
							<div className="row align-items-center">
								<div className="col-lg-6 col-md-6">
									<div className="profile-info">
										<img src={img} alt={user.displayName} />
			
										<h3>
											<a href="edit-profile.html">{user.displayName}</a>
										</h3>
										<a href="mailto:contact@ehay.com">{user.email}</a>
										<a href="tel:+1-(514)-321-4566">+1 (514) 321-4566</a>
									</div>
								</div>

								<div className="col-lg-6 col-md-6">
									<div className="edit-profiles">
										<Link to='' className="default-btn">Edit Profile</Link>
									</div>
								</div>
							</div>
						</div>
  );
};

export default Profile;