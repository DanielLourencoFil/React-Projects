import MainTitle from "./components/MainTitle";
import Slider from "./components/Slider";
import data from "./data";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState, useEffect } from "react";

function App() {
	const [position, setPosition] = useState(0);

	const prevPosition = () => {
		if (position + 1 > data.length - 1) {
			setPosition(0);
		} else {
			setPosition(position + 1);
		}
	};
	const nextPosition = () => {
		if (position - 1 < 0) {
			setPosition(data.length - 1);
		} else {
			setPosition(position - 1);
		}
	};

	useEffect(() => {
		const interval = setInterval(() => {
			if (position + 1 > data.length - 1) {
				setPosition(0);
			} else {
				setPosition(position + 1);
			}
		}, 5000);

		return () => clearInterval(interval);
	}, [position]);

	return (
		<section className="main-container">
			<MainTitle title={"Reviews"} />
			<div className="slider-container">
				{data.map((item, index) => {
					return (
						<Slider
							key={item.id}
							{...item}
							position={position}
							index={index}
							length={data.length}
						/>
					);
				})}
				<button className="next-btn review-btn" onClick={() => nextPosition()}>
					<FiChevronLeft />
				</button>
				<button className="prev-btn review-btn" onClick={() => prevPosition()}>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
}

export default App;
