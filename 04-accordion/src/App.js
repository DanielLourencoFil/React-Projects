import AnswerAndQuestion from "./components/AnswerAndQuestion ";
import questions from "./data";

function App() {
	return (
		<div className="main-container">
			<h1 className="main-title">Questions and Answers about Login</h1>
			<section className="question-answer-container">
				{questions.map((question) => {
					return <AnswerAndQuestion key={question.id} {...question} />;
				})}
			</section>
		</div>
	);
}

export default App;
