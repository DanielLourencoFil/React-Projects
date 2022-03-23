import { useEffect, useState } from "react";
import Values from "values.js";

function App() {
	const colorDefault = new Values("#F15025").all(10);
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [copy, setCopy] = useState(-1);
	const [colorValues, setColorValues] = useState(colorDefault);

	const generateColor = (e) => {
		e.preventDefault();
		setError(false);
		try {
			let colors = new Values(color).all(10);
			setColorValues(colors);
		} catch (error) {
			setColor("please, choose a valid color value");
			setError(true);
		}
	};
	const onFocus = () => {
		setError(false);
		setColor("");
	};
	const copyClipBoard = (e, index) => {
		setCopy(index);
		const copyColor = e.currentTarget.children[1].textContent;
		navigator.clipboard.writeText(copyColor);
	};
	useEffect(() => {
		const timeout = setTimeout(() => {
			setCopy(-1);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [copy]);
	return (
		<>
			<div className="main-container">
				<form className="form-container">
					<label htmlFor="color" className="label-generator">
						<span>Color Generator</span>
						<input
							className={error ? "alert" : ""}
							type="text"
							id="color"
							name="color"
							placeholder="#F15025"
							value={color}
							onChange={(e) => setColor(e.target.value)}
							onFocus={onFocus}
						/>
					</label>
					<button
						className="generator-btn"
						type="submit"
						onClick={generateColor}
					>
						generate
					</button>
				</form>
			</div>
			<section className="color-displayer">
				{colorValues.map((color, index) => {
					return (
						<div
							onClick={(e) => copyClipBoard(e, index)}
							key={index}
							className="single-color"
							style={{
								backgroundColor: `#${color.hex}`,
								color:
									color.type === "shade" || color.type === "base" ? "#fff" : "",
							}}
						>
							<p>{color.weight + "%"}</p>
							<p>{"#" + color.hex}</p>
							<p
								className={`copy-message ${
									copy === index ? "copy-message-alert" : ""
								}`}
							>
								Copied to Clipboard
							</p>
						</div>
					);
				})}
			</section>
		</>
	);
}

export default App;
