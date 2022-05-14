import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GlobalContext from "./context/GlobalContext";
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
	<React.StrictMode>
		<Auth0Provider
			domain={process.env.REACT_APP_DOMAIN}
			clientId={process.env.REACT_APP_CLIENT_ID}
			redirectUri={window.location.origin}
		>
			<GlobalContext>
				<App />
			</GlobalContext>
		</Auth0Provider>
	</React.StrictMode>
);
