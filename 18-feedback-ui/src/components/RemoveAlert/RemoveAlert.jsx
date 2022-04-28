import "./RemoveAlert.css";
import { FeedbackContextHook } from "../Context/FeedbackContext";

function RemoveAlert({ text, id, cancel, isRemove }) {
	const { feedbackUpdate } = FeedbackContextHook();
	return (
		<div className={`${"remove-modal"}  ${isRemove ? "active" : null}`}>
			<h4>{text}</h4>
			<div className="remove-btns">
				<button
					className="remove-btn confirm-btn"
					onClick={() => feedbackUpdate(null, id, "remove")}
				>
					Yes
				</button>
				<button className="remove-btn cancel-btn" onClick={() => cancel(false)}>
					Cancel
				</button>
			</div>
		</div>
	);
}

export default RemoveAlert;
