import ProjectCard from "./components/ProjectCard";
import MainTitle from "./components/MainTitle";
import dataProjects from "./dataProjects";

function App() {
	return (
		<section id="projects" className="projects-container">
			<MainTitle title={"Basic Projects"} />
			<div className="project-cards-container">
				{dataProjects.map((item) => {
					return <ProjectCard data={item} />;
				})}
			</div>
		</section>
	);
}

export default App;
