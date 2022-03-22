import { useState } from "react";
import text from "./data";

function App() {
	const [paragraphs, setParagraphs] = useState(1);
	const [numberParagraphs, setNumberParagraphs] = useState(0);

	const copyClipboard = () => {
		let copyText = text.slice(0, paragraphs);
		navigator.clipboard.writeText(copyText);
		setNumberParagraphs(0);
		setParagraphs(1);
	};
	return (
		<div className="main-container">
			<h1 className="main-title">Tired of boring Lorem Ipsum?</h1>
			<div className="input-generator">
				<label htmlFor="paragraphNumber" className="label-generator">
					<span>Paragraphs:</span>
					<input
						type="number"
						id="paragraphNumber"
						name="paragraphNumber"
						placeholder="1"
						max={8}
						min={1}
						value={paragraphs}
						onChange={(e) => setParagraphs(e.target.value)}
					/>
				</label>
				<div className="btn-container">
					<button
						className="generator-btn"
						onClick={() => setNumberParagraphs(paragraphs)}
					>
						Generate
					</button>
					{numberParagraphs > 0 ? (
						<button className="generator-btn" onClick={copyClipboard}>
							Copy
						</button>
					) : null}
				</div>
			</div>
			<div className="lorem-text">
				{text.map((item, index) => {
					return (
						<p key={index} className="ipsum-text">
							{index < numberParagraphs ? item : null}
						</p>
					);
				})}
			</div>
		</div>
	);
}

export default App;
