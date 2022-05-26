import "./Contact.css";
import { useState, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { SocialIcons } from "../common/common";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
	let inputType = [
		{ input: "name", status: false },
		{ input: "email", status: false },
	];
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [isResize, setIsResize] = useState(inputType);
	const [state, handleSubmit] = useForm("xzboorzb");

	const inputNameRef = useRef();
	const inputEmailRef = useRef();
	const resize = (input) => {
		if (input === "name") {
			inputNameRef.current.focus();

			setIsResize((prev) => {
				let update = prev.map((item) => {
					if (item.input === input) {
						return { ...item, status: true };
					} else {
						return item;
					}
				});
				return [...update];
			});
		}
		if (input === "email") {
			inputEmailRef.current.focus();
			setIsResize((prev) => {
				let update = prev.map((item) => {
					if (item.input === input) {
						return { ...item, status: true };
					} else {
						return item;
					}
				});
				return [...update];
			});
		}
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
				<Link to="/">
					<FaTimes className=" form-close-btn " />
				</Link>
				<div className="form-input-and-btn-container">
					<div className="input-label-container">
						<label
							className={`input-label name-label ${
								isResize[0].status && "resize"
							}`}
							htmlFor="name"
							onClick={() => resize("name")}
						>
							Please, type your name
						</label>
						<input
							ref={inputNameRef}
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
							className={`input-label email-label ${
								isResize[1].status && "resize"
							}`}
							htmlFor="email"
							onClick={() => resize("email")}
						>
							Please, type your email
						</label>
						<input
							ref={inputEmailRef}
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
