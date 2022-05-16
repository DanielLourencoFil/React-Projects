import "./Login.css";
import { LoginImage } from "../../components";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<main className="section-main login flex center">
			<div className="section-center flex column center login-center">
				<LoginImage />
				<h1 className="main-title">Github Finder</h1>
				<button className="generic-btn" onClick={() => loginWithRedirect()}>
					log in / sign up
				</button>
			</div>
		</main>
	);
};

export default Login;
