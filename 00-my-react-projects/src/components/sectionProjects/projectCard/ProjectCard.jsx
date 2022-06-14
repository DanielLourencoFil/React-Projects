import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({ data }) => {
	const { img, title, url, urlGithub } = data;

	const [isVisible, setIsVisible] = useState(false);
	const refCard = useRef(null);

	useEffect(() => {
		getPosition();
	}, []);
	const getPosition = () => {
		const event = window.addEventListener("scroll", () => {
			if (refCard.current !== null) {
				const itemPosition = refCard.current.getBoundingClientRect().top;
				if (itemPosition < window.innerHeight) {
					setIsVisible(true);
				}
			} else {
				return;
			}
		});
		return () => window.removeEventListener("scroll", event);
	};
	return (
		<div className="card-transition-effect">
			<article
				ref={refCard}
				className={` ${isVisible ? " active project-card" : "project-card"}`}
			>
				<div className="img-container">
					<a href={url} target="_blank" rel="noreferrer">
						<img className="card-img" src={img} alt={title} />
					</a>
				</div>
				<div className="card-footer">
					<h2 className="card-title">{title}</h2>
					<button className="card-icon">
						<a href={urlGithub} target="_blank" rel="noreferrer">
							<FaGithub />
						</a>
					</button>
				</div>
			</article>
		</div>
	);
};

export default ProjectCard;
