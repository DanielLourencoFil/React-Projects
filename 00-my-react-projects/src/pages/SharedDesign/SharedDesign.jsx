import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar, Footer } from "../../components";

const SharedDesign = ({
	isAbout,
	setIsAbout,
	showProjectsBtn,
	setShowProjectsBtn,
}) => {
	return (
		<>
			<NavBar
				isAbout={isAbout}
				setIsAbout={setIsAbout}
				showProjectsBtn={showProjectsBtn}
				setShowProjectsBtn={setShowProjectsBtn}
			/>
			<Outlet />
			<Footer />
		</>
	);
};

export default SharedDesign;
