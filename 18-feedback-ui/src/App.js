import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FeedbackSection from "./components/FeedbackSection/FeedbackSection";
import About from "./pages/About/About";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import FeedbackContextApp from "./components/Context/FeedbackContext";
import Error404 from "./pages/Error404/Error404";

const App = () => {
	return (
		<>
			<FeedbackContextApp>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<SharedLayout />}>
							<Route index element={<FeedbackSection />} />
							<Route path="about" element={<About />} />
							<Route path="*" element={<Error404 />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</FeedbackContextApp>
		</>
	);
};

export default App;
