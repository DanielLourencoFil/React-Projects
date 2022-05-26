import { SectionProjects, Hero, Footer } from "../../components";
import { BackTopBtn } from "../../components/common/common";
import {
	dataProjects,
	dataProjectsWebPages,
	dataProjectsSpecial,
} from "../../dataProjects";

const ReactProjects = () => {
	return (
		<div className="section-main">
			<Hero />
			<SectionProjects
				data={dataProjectsSpecial}
				title={"Special Project"}
				display={"flex"}
				width={"60%"}
				underlineColor={"#61dafb"}
			/>
			<SectionProjects
				title={"Webpages Projects"}
				data={dataProjectsWebPages}
				underlineColor={"#61dafb"}
			/>
			<SectionProjects
				title={"Basic Projects"}
				data={dataProjects}
				underlineColor={"#61dafb"}
			/>
			{/* <Footer /> */}
			<BackTopBtn returnTo={"#top"} />
		</div>
	);
};

export default ReactProjects;
