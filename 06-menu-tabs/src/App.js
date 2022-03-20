import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import MainTitle from "./components/MainTitle";
import Menu from "./components/Menu";

const url = "https://course-api.com/react-tabs-project";
function App() {
	const [data, setData] = useState("");
	useEffect(async () => {
		try {
			const response = await fetch(url);
			const dataJson = await response.json();
			setData(dataJson);
		} catch (error) {
			console.log(error);
		}
	}, []);
	console.log(data);

	if (!data) {
		return <Loading />;
	}
	return (
		<div className="main-container">
			<MainTitle title={"Experience"} />
			<Menu data={data} />
		</div>
	);
}

export default App;
