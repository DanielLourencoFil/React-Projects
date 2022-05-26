import { useState, useEffect } from "react";
import "./Skills.css";
import axios from "axios";
import { calcLanguage } from "./Chart/calcLanguage";
import Pie2d from "./Chart/Pie2d";

const Skills = () => {
	const [data, setData] = useState([]);
	const [calcData, setCalcData] = useState([]);
	const skills = [
		{
			name: "HTML 5",
			level: 100,
		},
		{
			name: "CSS 5",
			level: 100,
		},
		{
			name: "SASS",
			level: 70,
		},
		{
			name: "JAVASCRIPT",
			level: 100,
		},
		{
			name: "REACT JS",
			level: 90,
		},
		{
			name: "NEXT JS",
			level: 65,
		},
		{
			name: "AJAX / REST API",
			level: 90,
		},
		{
			name: "NODE / EXPRESS",
			level: 40,
		},
		// {
		// 	name: "SEO",
		// 	level: 30,
		// },
		// {
		// 	name: "Agile - Scrum",
		// 	level: 35,
		// },
	];

	useEffect(() => {
		const rootUrl = "https://api.github.com";
		const fecthData = async () => {
			try {
				const response = await axios(
					`${rootUrl}/users/daniellourencofil/repos`
				);
				setData(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		fecthData();
	}, []);
	useEffect(() => {
		if (data.length > 0) {
			setCalcData(calcLanguage(data));
		}
	}, [data]);

	return (
		<section id="skills" className="section-main skills-container">
			<div className="section-center skills">
				<div className="skills-list-container">
					<div className="skills-header">
						<h1>MY STACK</h1>
						<h4>(tools on my toolbox)</h4>
					</div>
					<ul className="skills-list">
						{skills.map((skill, index) => {
							return (
								<li key={index}>
									<span style={{ width: skill.level + "%" }}>{skill.name}</span>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="skills-chart">
					<Pie2d data={calcData} />
				</div>
			</div>
		</section>
	);
};

export default Skills;
