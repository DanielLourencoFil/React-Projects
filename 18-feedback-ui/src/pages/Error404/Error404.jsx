import { Link } from "react-router-dom";
function Error404() {
	const mainText = {
		color: "#fff",
		fontSize: "2.5rem",
		marginTop: "7rem",
	};
	const text = {
		color: "#fff",
		fontSize: "1.5rem",
		marginTop: "1rem",
	};
	return (
		<div style={{ width: "100vw", textAlign: "center" }}>
			<h1 style={mainText}>Opps...</h1>
			<h3 style={text}>There is an error, page not found!</h3>
			<Link to="/">
				<button
					className="back-home-btn bg-dark"
					style={{ backgroundColor: "#1a082b" }}
				>
					Back to Feedback UI
				</button>
			</Link>
		</div>
	);
}

export default Error404;
