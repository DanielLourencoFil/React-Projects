import ProjectCard from "./projectCard/ProjectCard";
import MainTitle from "../common/title/MainTitle";
import "./sectionProjects.css";

function SectionProjects({
	data,
	title,
	bgColor,
	display,
	underlineColor,
	width,
}) {
	return (
		<section
			id="projects"
			style={{ backgroundColor: bgColor }}
			className="projects-container"
		>
			<MainTitle title={title} underlineColor={underlineColor} />
			<div
				style={{ display: display, width: width }}
				className="project-cards-container section-center"
			>
				{data.map((item, index) => {
					return <ProjectCard data={item} key={index} />;
				})}
			</div>
		</section>
	);
}

export default SectionProjects;
