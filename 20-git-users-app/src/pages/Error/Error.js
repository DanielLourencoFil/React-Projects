import "./Error.css";
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
// import { GlobalContextAPIHook } from "../../context/GlobalContext";

const Error = () => {
	// const { loading } = GlobalContextAPIHook();
	const loading = false;
	return (
		<section className="section-main flex column center error-page">
			{loading ? (
				<Loader />
			) : (
				<div className="section-center flex column center error-page-info-container">
					<h1 className="main-title">404</h1>
					<h3 className="secondary-title">
						Sorry, the page you tried cannot be found!
					</h3>

					<Link to={"/"} className="generic-btn">
						back home
					</Link>
				</div>
			)}
		</section>
	);
};

export default Error;
