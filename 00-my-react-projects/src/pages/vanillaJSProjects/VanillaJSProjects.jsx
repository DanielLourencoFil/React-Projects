import { useEffect, useState } from "react";
import { SectionProjects, HeroJS } from "../../components";
import { BackTopBtn } from "../../components/common/common";
import {
	dataProjects,
	dataProjectsCourses,
	dataProjectsSpecial,
} from "../../dataProjectsJS";

const VanillaJSProjects = () => {
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
			<HeroJS />

			<SectionProjects
				data={dataProjectsSpecial}
				title={"Special Project"}
				display={"flex"}
				width={width}
				underlineColor={"#e9b949"}
			/>
			<SectionProjects
				data={dataProjectsCourses}
				title={"Courses Projects"}
				underlineColor={"#e9b949"}
			/>
			<SectionProjects
				data={dataProjects}
				title={"Basic Projects"}
				// bgColor={"var(--js-color-200)"}
				underlineColor={"#e9b949"}
			/>
			{/* <Footer /> */}
			<BackTopBtn returnTo={"#top"} />
		</div>
	);
};

export default VanillaJSProjects;
