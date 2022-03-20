import questions from "../data";
import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const AnswersAccordion = () => {
	const [showInfo, setShowInfo] = useState(0);

	const toggleInfoBtn = (id) => {
		if (id != showInfo) {
			setShowInfo(id);
		} else {
			setShowInfo(0);
		}
	};

	return (
		<>
			{questions.map((question) => {
				const { id, title, info } = question;
				return (
					<article key={id} className="question-answer-card">
						<header className="question-header">
							<h1 className="question-title">{title}</h1>
							<div className="question-btn-container">
								<AiOutlinePlus
									className={`question-btn ${
										showInfo === id ? "" : "show-btn"
									}`}
									onClick={() => toggleInfoBtn(id)}
								/>
								<AiOutlineMinus
									className={`question-btn ${
										showInfo === id ? "show-btn" : ""
									}`}
									onClick={() => toggleInfoBtn(id)}
								/>
							</div>
						</header>
						<footer>
							<p className="answer-info" data-info={id}>
								{showInfo === id && info}
							</p>
							{/* <p className="answer-info">{showInfo === id && info}</p> */}
						</footer>
					</article>
				);
			})}
		</>
	);
};

export default AnswersAccordion;
