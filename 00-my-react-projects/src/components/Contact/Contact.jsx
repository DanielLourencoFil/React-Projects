import "./Contact.css";
import { useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SocialIcons } from "../common/common";

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
					<div className="social-icons-submit-btn-container">
						<SocialIcons />
						<button
							className="contact-btn popup-btn"
							type="submit"
							disabled={state.submitting}
						>
							send
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Contact;
