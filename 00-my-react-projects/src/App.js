import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/common/loading/Loading";
import Landing from "./pages/Landing/Landing";
import ReactProjects from "./pages/reactProjects/ReactProjects";
import VanillaJSProjects from "./pages/vanillaJSProjects/VanillaJSProjects";
import SharedDesign from "./pages/SharedDesign/SharedDesign";
import Contact from "./components/Contact/Contact";

const App = () => {
	const [isAbout, setIsAbout] = useState(false);
	const [showProjectsBtn, setShowProjectsBtn] = useState(false);

	return (
		<div className="section-main">
			{document.addEventListener("DOMContentLoaded", () => {
				<Loading />;
			})}
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={
							<SharedDesign
								isAbout={isAbout}
								setIsAbout={setIsAbout}
								showProjectsBtn={showProjectsBtn}
								setShowProjectsBtn={setShowProjectsBtn}
							/>
						}
					>
						<Route
							exact
							path="/"
							element={
								<Landing
									isAbout={isAbout}
									setIsAbout={setIsAbout}
									showProjectsBtn={showProjectsBtn}
									setShowProjectsBtn={setShowProjectsBtn}
								/>
							}
						/>
						<Route path="/react-projects" element={<ReactProjects />} />
						<Route
							path="/vanilla-js-projects"
							element={<VanillaJSProjects />}
						/>
						<Route path="/contact" element={<Contact />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
