import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SectionProjects from "./components/SectionProjects";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import { dataProjects, dataProjectsWebPages } from "./dataProjects";
import Footer from "./components/Footer";
import BackTopBtn from "./components/BackTopBtn";

ReactDOM.render(
	<React.StrictMode>
		{document.addEventListener("DOMContentLoaded", () => {
			<Loading />;
		})}
		<Hero />
		<SectionProjects title={"Basic Projects"} data={dataProjects} />
		<SectionProjects
			title={"Webpages Projects"}
			data={dataProjectsWebPages}
			bgColor={"#fff"}
		/>
		<Footer />
		<BackTopBtn />
	</React.StrictMode>,
	document.getElementById("root")
);
