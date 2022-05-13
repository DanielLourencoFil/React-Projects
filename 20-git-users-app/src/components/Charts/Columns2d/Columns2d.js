import React from "react";

// Include the react-fusioncharts component
import ReactFC from "react-fusioncharts";

// Include the fusioncharts library
import FusionCharts from "fusioncharts";

// Include the chart type
import Chart from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Chart, FusionTheme);

const Bars2d = ({ data }) => {
	// Creating the JSON object to store the chart configurations
	const chartConfigs = {
		type: "column3d", // The chart type
		width: "100%", // Width of the chart
		height: "400", // Height of the chart
		dataFormat: "json", // Data type
		dataSource: {
			// Chart Configuration
			chart: {
				//Set the chart caption
				caption: "Most Popular Repos",
				xAxisName: "Repos",
				yAxisName: "Stars",
				yAxisNameFontSize: "20px",
				xAxisNameFontSize: "20px",
				xAxisNameFontColor: "#444",
				yAxisNameFontColor: "#444",
				palettecolors: "#29c3be, #474a7f",
				theme: "fusion",
			},
			// Chart Data
			data,
		},
	};
	return <ReactFC {...chartConfigs} />;
};

export default Bars2d;
