import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import ModalCenter from "./components/modalCenter/ModalCenter";

ReactDOM.render(
	<React.StrictMode>
		<Navbar />
		<ModalCenter />
	</React.StrictMode>,
	document.getElementById("root")
);
