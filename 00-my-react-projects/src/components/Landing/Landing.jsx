import "./Landing.css";
import "./About.css";
import { useEffect, useState, useRef } from "react";
import typingEffect from "../../utils/typingEffect";
import {
	PopUp,
	GoToSectionBtn,
	SocialIcons,
	BackTopBtn,
} from "../common/common";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Skills from "../Skills/Skills";

const Landing = ({
	isAbout,
	setIsAbout,
	showProjectsBtn,
	setShowProjectsBtn,
}) => {
	const [visitorName, setVisitorName] = useState("");
	const [isName, setIsName] = useState(false);
	const [isPopUp, setIsPopUp] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const titleRef = useRef();
	const subRef = useRef();

	let textArray = [
		`Hello ${visitorName || "World!"}|I'm Daniel
Welcome to my
portfolio!`,
		`Ola ${visitorName || "Mundo!"}|Eu sou Daniel
bem vindo ao meu
portfolio!`,
		`Hallo ${visitorName || "Welt!"}|Ich bin Daniel
willkommen in meinen
Portfolio!`,
		`¡Hola ${visitorName || "Mundo!"}|Soy Daniel
bienvenido a mi
porfolio!`,
	];

	const handleSubmitVisitorName = (text) => {
		// cancel previous function call by deleting text refs from DOM
		setIsName(true);
		// set new text
		setVisitorName(text);
		//call typing again
		const timeout = setTimeout(() => {
			setIsName(false);
			// typingEffect(textArray, titleRef, subRef);
			setIsPopUp(false);
		}, 300);
		return () => {
			clearTimeout(timeout);
		};
	};
	let timeout;
	useEffect(() => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			typingEffect(textArray, titleRef, subRef);
		}, 1500);
		return () => {
			clearTimeout(timeout);
		};
	}, [visitorName]);
	// const handleBtn = (e) => {
	// 	console.log(e.target);
	// 	setIsAbout(true);
	// };
	return (
		<>
			{isPopUp && (
				<PopUp handleSubmit={handleSubmitVisitorName} setIsPopUp={setIsPopUp} />
			)}
			<LandingAbout
				setIsAbout={setIsAbout}
				isAbout={isAbout}
				setShowProjectsBtn={setShowProjectsBtn}
				showProjectsBtn={showProjectsBtn}
			/>
			<section
				id="landing-container"
				className="landing-container section-main"
			>
				<div className="section-center landing">
					{/* LANDING TEXT = TYPING EFFECT */}
					<LandingText
						isName={isName}
						titleRef={titleRef}
						subRef={subRef}
						setIsPopUp={setIsPopUp}
					/>

					{/* LANDING PHOTO SECTION */}
					<div
						id="landing-photo-section"
						className="landing-photo-section"
						style={{ height: `${isOpen ? "130vh" : "100vh"}` }}
					>
						<div className="outer-btn-wrapper">
							<div className="outer-border-container">
								<div className="outer-border"></div>
								<div className="outer-border outer-border-2"></div>
								<div className="landing-img-container">
									<img
										className="porfolio-img"
										src="../../../images/porfolio-01.png"
										alt="daniel lourenço portolio"
									/>
								</div>
							</div>
							{/* BIG SCREEN BTN */}
							<Link to="/contact">
								<button
									className={`landing-btn generic-01-btn hide-btn hire-btn ${
										isAbout && "show-hire-btn-big-screen"
									}`}
								>
									Hire Me!
								</button>
							</Link>
						</div>
						{/* ONLY MOBILE SCREEN */}
						<div className={`landing-photo-text ${isOpen && "isOpen"} mobile`}>
							<FaTimes
								className={`open-btn ${isOpen && "isOpen-btn"}`}
								onClick={() => setIsOpen(!isOpen)}
							/>
							{!isOpen ? (
								<p>
									My name is Daniel Lourenço. I'm a Brazilian/German self-taught
									front-end web developer in search of new opportunities in the
									field...
								</p>
							) : (
								<>
									<p>
										My name is Daniel Lourenço. I'm a Brazilian/German
										self-taught front-end web developer in search of new
										opportunities in the field.
									</p>

									<p>
										I'm a highly motivated guy, passionate for languages
										(natural and artificial ones), suffering from a
										quasi-obsession for critical thinking and logic, and not
										afraid (not at all) of challenges.
									</p>
								</>
							)}
						</div>
						{/* BTNS */}
						<div className="about-btns-container mobile">
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
									to="/vanilla-js-projects"
									className={`landing-btn generic-01-btn projects-btn vanilla-projects-btn  ${
										showProjectsBtn && "show-vanilla-projects-btn"
									}`}
								>
									Vanilla JS{" "}
								</Link>
							</div>
							<Link to="/contact">
								<button className="landing-btn generic-01-btn mobile">
									Hire Me!
								</button>
							</Link>
						</div>
						{/* BTNS */}
						<GoToSectionBtn hide="mobile" id="skills" />
					</div>
					{/* BIG SCREEN BTN */}
					<GoToSectionBtn
						hide={"big-screen"}
						animationOnClick={isAbout}
						setIsAbout={setIsAbout}
						isAbout={isAbout}
						showProjectsBtn={showProjectsBtn}
						setShowProjectsBtn={setShowProjectsBtn}
					/>
					<BackTopBtn returnTo="#landing-container" />
				</div>
				<Skills />
			</section>
		</>
	);
};

const LandingText = ({ isName, titleRef, subRef, setIsPopUp }) => {
	return (
		<div className="landing-text-section">
			<div className="landing-text">
				{!isName && (
					<>
						<h1 className="landing-main-title cursor" ref={titleRef}></h1>
						<h2 className="landing-sub-title " ref={subRef}></h2>
					</>
				)}
			</div>
			<button
				className="landing-btn generic-01-btn"
				onClick={() => setIsPopUp(true)}
			>
				Wanna see something cool?
			</button>
			<GoToSectionBtn id="landing-photo-section" hide="mobile" />
		</div>
	);
};

const LandingAbout = ({ isAbout, showProjectsBtn, setShowProjectsBtn }) => {
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
export default Landing;
