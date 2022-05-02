import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import PhotoCardGallery from "./components/PhotoCardGallery/PhotoCardGallery";
import SearchForm from "./components/SearchForm/SearchForm";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [photos, setPhotos] = useState([]);
	const [searchPhotos, setSearchPhotos] = useState("");
	const [query, setQuery] = useState("");
	const [page, setPage] = useState(1);

	const fetchPhotos = async () => {
		setIsLoading(true);
		let url;

		const urlPage = `&page=${page}`;
		const urlSearch = `&query=${query}`;
		if (query) {
			url = `${searchUrl}${clientID}${urlPage}${urlSearch}`;
		} else {
			url = `${mainUrl}${clientID}${urlPage}`;
		}

		try {
			const response = await fetch(url);
			const data = await response.json();
			if (query) {
				setIsLoading(false);
				console.log(photos);
				console.log("search query");
				setPhotos([...photos, ...data.results]);
			} else {
				console.log("deafault search");
				setPhotos([...photos, ...data]);
				setIsLoading(false);
			}
		} catch (error) {
			setIsLoading(true);
			console.log("Not working ", error);
		}
	};

	useEffect(() => {
		setIsLoading(true);
		fetchPhotos();
	}, [page, query]);

	useEffect(() => {
		const event = window.addEventListener("scroll", () => {
			let scrollHeight = Math.max(
				document.body.scrollHeight,
				document.documentElement.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.offsetHeight,
				document.body.clientHeight,
				document.documentElement.clientHeight
			);
			if (!isLoading && window.innerHeight + window.scrollY >= scrollHeight) {
				setPage((old) => {
					return old + 1;
				});
				return;
			}
			return () => window.removeEventListener("scroll", event);
		});
	}, []);
	return (
		<main className="app">
			<SearchForm
				setPhotos={setPhotos}
				searchPhotos={searchPhotos}
				setSearchPhotos={setSearchPhotos}
				setQuery={setQuery}
				fetchPhotos={fetchPhotos}
			/>
			{isLoading && <Loading />}
			{photos.length > 0 && (
				<PhotoCardGallery photos={photos} isLoading={isLoading} page={page} />
			)}
		</main>
	);
}

export default App;
