import "./heroJS.css";

const HeroJS = () => {
	return (
		<header id="top" className="header-js">
			<div className="hero-js">
				<div className="hero-info-container-js">
					<h1 className="main-title-js hero-title-js">Vanilla Land</h1>
					<p className="hero-text-js">
						As a big journey is made of many small steps, and big things are
						made of small pieces, here you can see some of the little steps I
						made on my way into the the mastery of the web devepment building
						blocks,
						<span> HTML5</span>,<span> CSS3</span> and <span>Javascript</span>
					</p>
					<a href="#projects">
						<button className="hero-btn-js">Go to Projects</button>
					</a>
				</div>
				<img src="../js-logo.png" alt="" className="hero-img-js" />
			</div>
		</header>
	);
};

export default HeroJS;
