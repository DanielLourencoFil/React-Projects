import "./Repos.css";

import { GlobalContextAPIHook } from "../../context/GlobalContext";
import { Pie2d, Doughnut, Bars2d, Columns2d } from "../Charts";

const Repos = () => {
	const { chartData, loading } = GlobalContextAPIHook();
	const { language, popularity } = chartData;
	if (!loading.global && chartData.length !== 0) {
		return (
			<div className="charts-container section-center">
				<Pie2d data={language[0]} />
				<Columns2d className="c" data={popularity[0]} />
				<Doughnut data={language[1]} />
				<Bars2d data={popularity[1]} />
			</div>
		);
	}
};

export default Repos;
