import React from "react";

const ProjectCard = ({ data }) => {
	const { img, title, url } = data;
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<article className="project-card">
				<img className="card-img" src={img} alt={title} />
				<h2 className="card-title">{title}</h2>
			</article>
		</a>
	);
};

export default ProjectCard;
