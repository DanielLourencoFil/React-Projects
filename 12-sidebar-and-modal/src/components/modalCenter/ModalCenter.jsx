import React, { useState } from "react";
import "./modalCenter.css";
import { FaTimes } from "react-icons/fa";

const ModalCenter = () => {
	const [show, setShow] = useState(false);
	return (
		<>
			<button
				className={`modal-btn ${!show ? "show-btn" : ""}`}
				onClick={() => setShow(!show)}
			>
				Show Modal
			</button>
			<div className={`modal-center ${show ? "show-modal-center" : ""}`}>
				<button className="close-modal-btn" onClick={() => setShow(!show)}>
					<FaTimes />
				</button>
				<h1 className="modal-title">Modal Content</h1>
			</div>
		</>
	);
};

export default ModalCenter;
