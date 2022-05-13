import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import LoaderSmall from "../Loader/LoaderSmall";

const Navbar = () => {
	const { user, isAuthenticated, isLoading, logout } = useAuth0();

	return (
		<nav className="section-main wrapper">
			{isLoading ? (
				<LoaderSmall />
			) : (
				<>
					{isAuthenticated && (
						<div className="section-center nav">
							<>
								<div className="nav-user-info">
									<img
										className="nav-user-img"
										src={user.picture}
										alt={user.name}
									/>
									<h2 className="nav-user-name">
										Welcome,
										<span>{user.name}</span>
									</h2>
								</div>
								<button
									className="generic-btn logout-btn"
									onClick={() => logout({ returnTo: window.location.origin })}
								>
									Log Out
								</button>
							</>
						</div>
					)}
				</>
			)}
		</nav>
	);
};

export default Navbar;

/*

import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};

export default Profile;
*/
