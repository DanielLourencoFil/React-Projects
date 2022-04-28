import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import React from "react";

const SharedComponents = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

export default SharedComponents;
