import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ModalMenu from "./components/Navbar/ModalMenu";
import SubmenuLinks from "./components/Navbar/SubmenuLinks";

const App = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<ModalMenu />
			<SubmenuLinks />
		</>
	);
};

export default App;
