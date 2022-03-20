import MainTitle from "./components/MainTitle";
import Menu from "./components/Menu";
import menu from "./data";

function App() {
	return (
		<main className="main-container">
			<MainTitle title={"Our Menu"} />
			<Menu menu={menu} />
		</main>
	);
}

export default App;
