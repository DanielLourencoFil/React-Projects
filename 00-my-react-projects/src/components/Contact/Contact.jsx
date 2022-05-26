import "./Contact.css";
import { useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [isResize, setIsResize] = useState(false);
	const [state, handleSubmit] = useForm("xzboorzb");

	const inputRef = useRef();

	const resize = () => {
		inputRef.current.focus();
		setIsResize(true);
	};
	if (state.succeeded) {
		return <p className="contact-success-msg">Thanks for your contact!</p>;
	}
	return (
		<div className="contact-container">
			<form
				action="https://formspree.io/f/xzboorzb"
				className="contact-form"
				onSubmit={handleSubmit}
			>
				{/* <FaTimes
					className=" form-close-btn popup-close-btn"
					onClick={() => setIsPopUp(false)}
				/> */}
				<div className="form-input-and-btn-container">
					<div className="input-label-container">
						<label
							className={`input-label name-label ${isResize && "resize"}`}
							htmlFor="name"
							onClick={() => resize()}
						>
							Please, type your name
						</label>
						<input
							ref={inputRef}
							className="contact-input"
							type="text"
							id="name"
							name="name"
							onChange={(e) => setName(e.target.value)}
							value={name}
							onFocus={() => resize()}
						/>
					</div>
					<div className="input-label-container">
						<label
							className={`input-label email-label ${isResize && "resize"}`}
							htmlFor="email"
							onClick={() => resize()}
						>
							Please, type your email
						</label>
						<input
							ref={inputRef}
							className="contact-input"
							id="email"
							type="email"
							name="email"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
							onFocus={() => resize()}
						/>
						<ValidationError
							prefix="Email"
							field="email"
							errors={state.errors}
						/>
					</div>
					<textarea
						name="messsage"
						id="messsage"
						cols="30"
						rows="10"
						placeholder="Please, leave a message"
						className="contact-input contact-text-area"
					></textarea>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>

					<button
						className="contact-btn popup-btn"
						type="submit"
						disabled={state.submitting}
					>
						send
					</button>
				</div>
			</form>
		</div>
	);

	return (
		<section className="section-main">
			<div className="section-center">
				<form action="submit" className="contact-form"></form>
			</div>
		</section>
	);
};

export default Contact;

/*
const Contact = () => {
	const [text, setText] = useState("");
	const [isResize, setIsResize] = useState(false);
	const inputRef = useRef();

	const checkSubmit = (e) => {
		e.preventDefault();
	};
	const resize = () => {
		inputRef.current.focus();
		setIsResize(true);
	};
	return (
		<div className="contact-container">
			<form action="submit" className="contact-form">
				 <FaTimes
					className=" form-close-btn popup-close-btn"
					onClick={() => setIsPopUp(false)}
				/> 
				<div className="form-input-and-btn-container">
					<label
						className={`input-label ${isResize && "resize"}`}
						htmlFor="input"
						onClick={() => resize()}
					>
						Please, type your name
					</label>
					<input
						ref={inputRef}
						className="contact-input"
						type="text"
						onChange={(e) => setText(e.target.value)}
						value={text}
						onFocus={() => resize()}
					/>
					<label
						className={`input-label ${isResize && "resize"}`}
						htmlFor="input"
						onClick={() => resize()}
					>
						Please, type your name
					</label>
					<input
						ref={inputRef}
						className="contact-input"
						type="email"
						onChange={(e) => setText(e.target.value)}
						value={text}
						onFocus={() => resize()}
					/>
					<button
						className={`contact-btn popup-btn ${!text && "disabled"}`}
						disabled={!text ? true : false}
						onClick={(e) => checkSubmit(e)}
					>
						send
					</button>
				</div>
			</form>
		</div>
	);

	return (
		<section className="section-main">
			<div className="section-center">
				<form action="submit" className="contact-form"></form>
			</div>
		</section>
	);
};
*/
