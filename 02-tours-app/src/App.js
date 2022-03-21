import Loading from "./components/Loading";
import ToursDisplayer from "./components/ToursDisplayer";
import { useEffect, useState } from "react";

const url = "https://course-api.com/react-tours-project";

function App() {
	const [tours, setTours] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState("");

	const fechtTours = async () => {
		try {
			const response = await fetch(url);
			const getTours = await response.json();
			// console.log(getTours);
			setIsLoading(false);
			setTours(getTours);
			setIsError("");
		} catch (error) {
			setIsLoading(false);
			setIsError(
				"Sorry, we have a problem and are not able to find any tour. Please, try it again latter"
			);
			throw new Error(error);
		}
	};
	useEffect(() => {
		fechtTours();
	}, []);

	const removeTour = (id) => {
		const newTours = tours.filter((tours) => tours.id != id);
		setTours(newTours);
	};

	if (isLoading) {
		return <Loading />;
	}
	if (tours.length == 0) {
		return (
			<main className="no-tours-container">
				<h1 className="main-title">No tours left</h1>
				<button className="tour-btn" onClick={fechtTours}>
					Refresh
				</button>
			</main>
		);
	}

	return (
		<main>
			<h1 className="main-title">Our Tours</h1>
			<ToursDisplayer tours={tours} isError={isError} removeTour={removeTour} />
			;
		</main>
	);
}
export default App;
