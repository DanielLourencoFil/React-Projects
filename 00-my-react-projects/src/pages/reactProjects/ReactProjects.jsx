import { useEffect, useState } from "react";
import { SectionProjects, Hero } from "../../components";
import { BackTopBtn } from "../../components/common/common";
import {
	dataProjects,
	dataProjectsWebPages,
	dataProjectsSpecial,
} from "../../dataProjects";

const ReactProjects = () => {
	const [width, setWidth] = useState("55%");

	useEffect(() => {
		if (window.innerWidth < 799) {
			setWidth("85%");
		} else {
			setWidth("55%");
		}
	});
	return (
		<div className="section-main">
			<Hero />
			<SectionProjects
				data={dataProjectsSpecial}
				title={"Special Project"}
				display={"flex"}
				width={width}
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
			<BackTopBtn returnTo={"#top"} />
		</div>
	);
};

export default ReactProjects;
