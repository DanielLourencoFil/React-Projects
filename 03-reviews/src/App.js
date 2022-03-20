import MainTitle from "./components/MainTitle";
import ReviewsContainer from "./components/ReviewsContainer";
import data from "./data";

function App() {
	return (
		<main className="main-container">
			<MainTitle title={"Our Reviews"} />
			<ReviewsContainer data={data} />
		</main>
	);
}

export default App;
