import ProjectCard from "./ProjectCard";
import MainTitle from "./MainTitle";
import "./sectionProjects.css";
import { useRef, useEffect, useState } from "react";

function SectionProjects({ data, title, bgColor, display }) {
	return (
		<section
			id="projects"
			style={{ backgroundColor: bgColor }}
			className="projects-container"
		>
			<MainTitle title={title} />
			<div style={{ display: display }} className="project-cards-container">
				{data.map((item, index) => {
					return <ProjectCard data={item} key={index} />;
				})}
			</div>
		</section>
	);
}

export default SectionProjects;
