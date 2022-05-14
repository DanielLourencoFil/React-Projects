import SectionProjects from "./components/SectionProjects";
import Hero from "./components/Hero";
import Loading from "./components/Loading";
import { dataProjects, dataProjectsWebPages } from "./dataProjects";
import Footer from "./components/Footer";
import BackTopBtn from "./components/BackTopBtn";

const App = () => {
	return (
		<>
			{document.addEventListener("DOMContentLoaded", () => {
				<Loading />;
			})}
			<Hero />
			<SectionProjects
				title={"Webpages Projects"}
				data={dataProjectsWebPages}
			/>
			<SectionProjects
				title={"Basic Projects"}
				data={dataProjects}
				bgColor={"#fff"}
			/>
			<Footer />
			<BackTopBtn />
		</>
	);
};

export default App;
