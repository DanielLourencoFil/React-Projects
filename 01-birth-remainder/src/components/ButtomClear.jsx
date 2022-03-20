import React from "react";

const ButtomClear = (props) => {
	return (
		<button className="btn" onClick={props.cb}>
			Clear List
		</button>
	);
};

export default ButtomClear;
