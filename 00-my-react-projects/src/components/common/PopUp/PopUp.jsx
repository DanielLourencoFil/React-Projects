import { useState, useRef } from 'react';
import { FaTimes } from 'react-icons/fa';
import './PopUp.css';

const PopUp = ({ handleSubmit, setIsPopUp }) => {
	const [text, setText] = useState('');
	const [isResize, setIsResize] = useState(false);
	const inputRef = useRef();
	const length = 10;

	const checkSubmit = (e) => {
		e.preventDefault();
		if (text && text.length <= length) {
			handleSubmit(text + '!');
		} else {
			return;
		}
	};
	const resize = () => {
		inputRef.current.focus();
		setIsResize(true);
	};
	return (
		<div className="popup-container">
			<div className="popup">
				<FaTimes
					className="popup-close-btn"
					onClick={() => setIsPopUp(false)}
				/>
				<div className="input-and-btn-container">
					<label
						className={`popup-label ${isResize && 'resize'}`}
						htmlFor="input"
						onClick={() => resize()}
					>
						Please, type your name
					</label>
					<input
						ref={inputRef}
						className="popup-input"
						type="text"
						onChange={(e) => setText(e.target.value)}
						value={text}
						onFocus={() => resize()}
					/>
					<button
						className={`popup-btn ${
							(!text || text?.length > length || text.length === 0) &&
							'disabled'
						}`}
						disabled={!text ? true : false}
						onClick={(e) => checkSubmit(e)}
					>
						send
					</button>
				</div>
				{/* </div> */}
				<p
					className="check-length"
					style={{
						backgroundColor: `${text.length > length ? '#fa1a1a' : ''}`,
					}}
				>
					{text ? text.length : 0} / {length} max
				</p>
			</div>
		</div>
	);
};

export default PopUp;
