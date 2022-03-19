import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Hero from "./components/Hero";
import reportWebVitals from "./reportWebVitals";
import Loading from "./components/Loading";

ReactDOM.render(
	<React.StrictMode>
		{document.addEventListener("DOMContentLoaded", () => {
			<Loading />;
		})}
		<Hero />
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
