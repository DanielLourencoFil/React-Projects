import "./App.css";
import { useEffect, useState } from "react";
import PhotoCardGallery from "./components/PhotoCardGallery/PhotoCardGallery";
import SearchForm from "./components/SearchForm/SearchForm";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
	const [loading, setLoading] = useState(true);
	const [photos, setPhotos] = useState([]);

	const fetchPhotos = async () => {
		setLoading(true);
		let url;
		url = mainUrl + clientID;
		try {
			const response = await fetch(url);
			const data = await response.json();
			setPhotos(data);
			setLoading(false);
		} catch (error) {
			setLoading(true);
			console.log(error);
		}
	};
	useEffect(() => {
		fetchPhotos();
	}, []);

	return (
		<main className="App">
			<SearchForm />
			<PhotoCardGallery photos={photos} loading={loading} />
		</main>
	);
}

export default App;
