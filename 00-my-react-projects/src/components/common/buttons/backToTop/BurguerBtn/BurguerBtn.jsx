import "./BurguerBtn.css";

const BurguerBtn = ({ cb, value }) => {
	return (
		<div className="burguer-btn-container" onClick={() => cb(!value)}>
			<div
				className={`burguer-line burguer-line-up ${value && "opacity"}`}
				onClick={() => cb(!value)}
			></div>
			<div
				className={`burguer-line burguer-line-middle-1 ${value && "rotate"}`}
				onClick={() => cb(!value)}
			></div>
			<div
				className={`burguer-line burguer-line-middle-2 ${value && "rotate"}`}
				onClick={() => cb(!value)}
			></div>
			<div
				className={`burguer-line burguer-line-down ${value && "opacity"}`}
				onClick={() => cb(!value)}
			></div>
		</div>
	);
};

export default BurguerBtn;
