import "./About.css";
import React from "react";
import { Link } from "react-router-dom";
import { SocialIcons } from "../common/common";

const About = ({ isAbout, showProjectsBtn, setShowProjectsBtn }) => {
	return (
		<section
			className={`about-container big-screen ${isAbout && "show-about"}`}
		>
			<p>
				My name is Daniel Lourenço. I'm a Brazilian/German self-taught front-end
				web developer in search of new opportunities in the field.
			</p>

			<p>
				I'm a highly motivated guy, passionate for languages (natural and
				artificial ones), suffering from a quasi-obsession for critical thinking
				and logic, and not afraid (not at all) of challenges.
			</p>
			<SocialIcons />
			<div className="about-btns-container big-screen">
				<div className="about-projects-btns-container">
					<button
						className="landing-btn generic-01-btn"
						onClick={() => setShowProjectsBtn(!showProjectsBtn)}
					>
						My Projects
					</button>
					<Link
						to="/react-projects"
						className={`landing-btn generic-01-btn projects-btn react-projects-btn  ${
							showProjectsBtn && "show-react-projects-btn"
						}`}
					>
						React JS
					</Link>
					<Link
						to="/vue-projects"
						className={`landing-btn generic-01-btn projects-btn react-projects-btn  ${
							showProjectsBtn && "show-vue-projects-btn"
						}`}
					>
						Vue JS
					</Link>
					<Link
						to="/vanilla-js-projects"
						className={`landing-btn generic-01-btn projects-btn vanilla-projects-btn  ${
							showProjectsBtn && "show-vanilla-projects-btn"
						}`}
					>
						Vanilla JS{" "}
					</Link>
				</div>
				<a href="#skills">
					<button className="landing-btn generic-01-btn ">My Skills</button>
				</a>
			</div>
		</section>
	);
};

export default About;
