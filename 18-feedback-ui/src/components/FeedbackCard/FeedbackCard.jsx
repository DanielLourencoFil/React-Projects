import "./FeedbackCard.css";
import { FeedbackContextHook } from "../Context/FeedbackContext";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useState } from "react";
import RemoveAlert from "../RemoveAlert/RemoveAlert";

const FeedbackCard = ({ id, rate, text }) => {
	const [isRemove, setIsRemove] = useState(false);
	const { isDarkMode, feedbackUpdate } = FeedbackContextHook();

	return (
		<section
			className={`${"feedback-card"} ${
				isDarkMode ? "darkmode-bg-dark darkmode-color-light" : ""
			}`}
		>
			<RemoveAlert
				text={"Do you want to remove this feedback?"}
				id={id}
				cancel={setIsRemove}
				isRemove={isRemove}
			/>

			<span
				className={`${"feedback-card-rate"} ${
					isDarkMode ? "darkmode-bg-light darkmode-color-dark" : ""
				}`}
			>
				{rate}
			</span>
			<div className="feedback-card-edit-container">
				<a href="#feedback-form">
					<button
						id="edit-btn"
						className="feedback-edit-btn edit-btn"
						onClick={() => feedbackUpdate(null, id, "edit")}
					>
						<FaEdit className="edit-btn" />
					</button>
				</a>
				<button
					className="feedback-edit-btn remove-btn"
					onClick={() => setIsRemove(true)}
				>
					<FaTrash />
				</button>
			</div>
			<p className="feedback-card-text">{text}</p>
		</section>
	);
};

export default FeedbackCard;
