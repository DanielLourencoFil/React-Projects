import { useEffect, useState } from "react";
import { SectionProjects, HeroVue } from "../../components";
import { BackTopBtn } from "../../components/common/common";
import {
	dataProjectsWebPages,
	dataProjectsSpecial,
} from "../../dataProjectsVue";

const VueProjects = () => {
	const [width, setWidth] = useState("55%");

	useEffect(() => {
		if (window.innerWidth < 799) {
			setWidth("85%");
		} else {
			setWidth("55%");
		}
	}, [setWidth]);
	return (
		<div className="section-main">
			<HeroVue />
			<SectionProjects
				data={dataProjectsSpecial}
				title={"Special Project"}
				display={"flex"}
				width={width}
				underlineColor={"#61dafb"}
			/>
			<SectionProjects
				title={"Webpages"}
				data={dataProjectsWebPages}
				underlineColor={"#61dafb"}
			/>
			{/* <SectionProjects
				title={"Basic Projects"}
				data={dataProjects}
				underlineColor={"#61dafb"}
			/> */}
			<BackTopBtn returnTo={"#top"} />
		</div>
	);
};

export default VueProjects;
