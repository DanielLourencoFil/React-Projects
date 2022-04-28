import React, { useState, useEffect, useRef } from "react";
import { FeedbackContextHook } from "../Context/FeedbackContext";
import "./ReviewForm.css";

const ReviewForm = () => {
	const ratesRange = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const defaultFeedback = {
		id: "",
		rate: "",
		text: "",
	};
	const { isDarkMode, feedbackUpdate, singleFeedback, isEdit, setIsEdit } =
		FeedbackContextHook();

	const [newFeedback, setNewFeedback] = useState(defaultFeedback);
	const [hasFocus, setHasFocus] = useState(false);
	const [isSelected, setIsSelected] = useState(0);
	const [hasRating, setHasRating] = useState(false);

	const formRef = useRef(null);
	const inputLength = 20;
	const feedbackLength = newFeedback.text.trim().length;

	useEffect(() => {
		if (isEdit) {
			setNewFeedback({ ...singleFeedback });
			setHasRating(true);
		}
		if (!isEdit) {
			setNewFeedback(defaultFeedback);
		}
	}, [isEdit, singleFeedback]);

	const handleFeedbackInput = (value) => {
		setNewFeedback({ ...newFeedback, text: value });
	};
	const handleRates = (e, value) => {
		setHasRating(false);
		e.preventDefault();
		if (!isEdit) {
			setIsSelected(value);
			const newID = new Date().getTime().toString();
			setNewFeedback({ ...newFeedback, id: newID, rate: value });
			setHasRating(true);
		}
		if (isEdit) {
			setNewFeedback({ ...newFeedback, rate: value });
			setHasRating(true);
		}
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setHasRating(false);
		if (!isEdit) {
			feedbackUpdate(newFeedback, null, "add");
			setIsSelected(0);
			setNewFeedback(defaultFeedback);
		}
		if (isEdit) {
			feedbackUpdate(newFeedback, null, "submit");
			setIsSelected(0);
			setNewFeedback(defaultFeedback);
		}
	};
	const ratesRangeRender = (arrayNumbers) => {
		return arrayNumbers.map((item) => {
			return (
				<button
					className={`${
						item === isSelected || item === newFeedback.rate
							? "rate-btn-active rates-btn"
							: "rates-btn"
					} `}
					key={item}
					onClick={(e) => handleRates(e, item)}
				>
					{item}
				</button>
			);
		});
	};
	const submitControl = () => {
		if (feedbackLength < inputLength) {
			return true;
		}
		if (!hasRating) {
			return true;
		} else {
			return false;
		}
	};

	useEffect(() => {
		const onBlur = (e) => {
			const editBtn = document.getElementById("edit-btn");

			if (
				!formRef.current?.contains(e.target) &&
				e.target !== editBtn &&
				!editBtn.contains(e.target)
			) {
				console.log("from function");
				setHasFocus(false);
				setHasRating(false);
				setIsSelected(0);
				setNewFeedback(defaultFeedback);
				setIsEdit(false);
			}
		};
		window.addEventListener("click", onBlur);
		return () => window.removeEventListener("click", onBlur);
	});

	return (
		<>
			<form
				action="submit"
				className={`${"review-form"} ${
					isDarkMode ? "darkmode-bg-dark darkmode-color-light" : ""
				}`}
				id="feedback-form"
				ref={formRef}
			>
				<h1 className="review-form-title">
					how would you rate your service with us?
				</h1>
				<div className="rates-container">{ratesRangeRender(ratesRange)}</div>
				<div
					className={`${
						!hasFocus
							? "feedback-input-container"
							: " feedback-input-container feedback-input-container-active"
					}`}
				>
					<input
						className="feedback-input"
						type="text"
						value={newFeedback.text}
						placeholder={"Write your feedback"}
						onChange={(e) => handleFeedbackInput(e.target.value)}
						onFocus={() => setHasFocus(true)}
					/>
					<button
						className="feedback-submit-btn"
						type="submit"
						onClick={handleSubmit}
						disabled={submitControl()}
					>
						{`${isEdit ? "Edit" : "Send"}`}
					</button>
				</div>
				<p
					className={`${
						feedbackLength < inputLength && feedbackLength >= 1 && hasFocus
							? "input-alert-text-length active"
							: "input-alert-text-length"
					}`}
				>
					The feedback must be longer than {inputLength} characters{" "}
					<span>{feedbackLength + "/" + inputLength}</span>
				</p>
			</form>
		</>
	);
};

export default ReviewForm;
