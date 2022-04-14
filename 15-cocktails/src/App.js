import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContextProvider from "./context";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import { MainSharedLayout } from "./components/SharedLayouts/MainSharedLayout";
import SingleCocktail from "./pages/SingleCocktail";

function App() {
	return (
		<ContextProvider>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<MainSharedLayout />}>
						<Route index element={<Home />}></Route>
						<Route
							path="single-cocktail/:idDrink"
							element={<SingleCocktail />}
						></Route>
						<Route path="about" element={<About />}></Route>
						<Route path="*" element={<Error />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</ContextProvider>
	);
}

export default App;
