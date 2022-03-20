import { useState } from "react";
import data from "./data";
import BirthDaySinglePerson from "./components/BirthDaySinglePerson";

function App() {
	const [length, setLength] = useState(data.length);
	const [dataPeople, setDataPeople] = useState(data);

	const clearList = () => {
		setDataPeople([]);
		setLength(0);
	};
	return (
		<main className="container">
			<section className="app-container">
				<div className="birthdays-counter">
					{length == 0 ? (
						<h4> no birthdays today </h4>
					) : (
						<h4> {length} birthdays today </h4>
					)}
				</div>
				<ul className="birth-list">
					<BirthDaySinglePerson people={dataPeople} />;
				</ul>
				<button className="btn" onClick={clearList}>
					Clear All
				</button>
			</section>
		</main>
	);
}

export default App;
