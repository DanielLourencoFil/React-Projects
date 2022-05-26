import "./GoToSection.css";

const GoToSectionBtn = ({
	id,
	hide,
	animationOnClick,
	setIsAbout,
	isAbout,
	showProjectsBtn,
	setShowProjectsBtn,
}) => {
	const handleBtn = () => {
		setShowProjectsBtn(false);
		setIsAbout(!isAbout);
	};
	if (id) {
		return (
			<a href={`#${id}`}>
				<div
					className={`go-to-section-btn ${hide} ${
						animationOnClick && "reverse-btn"
					}`}
					onClick={() => handleBtn()}
				>
					<div className="left-side-arrow-btn"></div>
					<div className="right-side-arrow-btn"></div>
				</div>
			</a>
		);
	} else {
		return (
			<div
				className={`go-to-section-btn ${hide} ${
					animationOnClick && "reverse-btn"
				}`}
				onClick={() => handleBtn()}
			>
				<div className="left-side-arrow-btn"></div>
				<div className="right-side-arrow-btn"></div>
			</div>
		);
	}
};

export default GoToSectionBtn;
