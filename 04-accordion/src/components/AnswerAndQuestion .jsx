import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AnswerAndQuestion = ({ title, info }) => {
	const [showInfo, setShowInfo] = useState(false);
	const toggleInfoBtn = () => {
		setShowInfo(!showInfo);
	};
	return (
		<article className="question-answer-card">
			<header className="question-header">
				<h1 className="question-title">{title}</h1>
				<button className="question-btn-single" onClick={() => toggleInfoBtn()}>
					{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			<footer>
				<p className="answer-info">{showInfo && info}</p>
			</footer>
		</article>
	);
};

export default AnswerAndQuestion;
