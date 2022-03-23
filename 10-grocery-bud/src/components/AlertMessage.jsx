import React from "react";

const AlertMessage = ({ message }) => {
	return (
		<p
			className={`input-message ${
				(message === 0 && "") ||
				(message === 1 && "show-remove-msg") ||
				(message === 2 && "show-remove-msg") ||
				(message === 3 && "show-add-msg") ||
				(message === 4 && "show-add-msg") ||
				(message === 5 && "show-remove-msg")
			}`}
		>
			{(message == 0 && "") ||
				(message === 1 && "Item removed from the List") ||
				(message === 2 && "The List is empty") ||
				(message === 3 && "Item value updated") ||
				(message === 4 && "Item added to the List") ||
				(message === 5 && "Please, enter value")}
		</p>
	);
};

export default AlertMessage;
