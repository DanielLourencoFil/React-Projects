import "./FeebackStats.css";
import { FeedbackContextHook } from "../Context/FeedbackContext";
const FeebackStats = () => {
	const { feedback } = FeedbackContextHook();
	const average = () => {
		let calcAverage = 0;
		feedback.map((item) => {
			return (calcAverage = calcAverage + item.rate);
		});
		const result = (calcAverage / feedback.length).toPrecision(2);
		if (parseFloat(result)) {
			return result;
		} else {
			return;
		}
	};
	if (feedback?.length > 0) {
		return (
			<div className="feedback-stats">
				<p className="reviews-number">{feedback.length} Reviews</p>
				<p className="average-ratings">Average Ratings: {average()}</p>
			</div>
		);
	}
	if (!feedback || feedback.length === 0) {
		return (
			<div className="feedback-stats">
				<p className="feedback-alert">Sorry, there are no feedbacks yet!</p>
			</div>
		);
	}
};

export default FeebackStats;
