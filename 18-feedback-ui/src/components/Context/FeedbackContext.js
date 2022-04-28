import React, { createContext, useContext, useState, useEffect } from "react";
import { feedbacks } from "../../feedbackData";

const FeedbackContext = createContext("");

const FeedbackContextApp = ({ children }) => {
	const localData = JSON.parse(localStorage.getItem("feedbackList"));
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	const [feedback, setFeedback] = useState(localData || feedbacks);

	const [singleFeedback, setSingleFeedback] = useState({});
	const [isEdit, setIsEdit] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		if (localData === null || localData?.length === 0) {
			setFeedback(feedbacks);
			localStorage.setItem("feedbackList", JSON.stringify(feedback));
			setIsLoading(false);
		}
	}, []);

	useEffect(() => {
		setIsLoading(true);
		localStorage.setItem("feedbackList", JSON.stringify(feedback));
		setIsLoading(false);
	}, [feedback, isLoading]);

	const feedbackUpdate = (data, id, action) => {
		if (action === "add") {
			setFeedback(() => {
				return [data, ...feedback];
			});
			setIsEdit(false);
		}
		if (action === "remove") {
			setFeedback(() => {
				const newData = feedback.filter((item) => item.id !== id);
				return newData;
			});
			setSingleFeedback([]);
			setIsEdit(false);
		}

		if (action === "submit") {
			setFeedback(() => {
				return feedback.map((item) => {
					if (item.id === data.id) {
						return { ...item, rate: data.rate, text: data.text };
					}
					return item;
				});
			});
			setIsEdit(false);
		}
		if (action === "edit") {
			setSingleFeedback(() => {
				return feedback.find((item) => item.id === id);
			});

			setIsEdit(true);
		}
	};
	return (
		<FeedbackContext.Provider
			value={{
				localData,
				isLoading,
				setIsLoading,
				isDarkMode,
				setIsDarkMode,
				feedback,
				setFeedback,
				singleFeedback,
				setSingleFeedback,
				isEdit,
				setIsEdit,
				feedbackUpdate,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export const FeedbackContextHook = () => {
	return useContext(FeedbackContext);
};
export default FeedbackContextApp;
