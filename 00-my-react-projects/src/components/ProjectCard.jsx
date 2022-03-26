import React from "react";
import { FaGithub } from "react-icons/fa";
const ProjectCard = ({ data }) => {
	const { img, title, url, urlGithub } = data;
	return (
		<article className="project-card">
			<a href={url} target="_blank" rel="noreferrer">
				<img className="card-img" src={img} alt={title} />
			</a>
			<div className="card-footer">
				<h2 className="card-title">{title}</h2>
				<button className="card-icon">
					<a href={urlGithub} target="_blank" rel="noreferrer">
						<FaGithub />
					</a>
				</button>
			</div>
		</article>
	);
};

export default ProjectCard;
