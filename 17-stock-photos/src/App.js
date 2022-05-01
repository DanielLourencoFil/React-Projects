import { useEffect, useState } from "react";
import Loading from "./components/Loading/Loading";
import PhotoCardGallery from "./components/PhotoCardGallery/PhotoCardGallery";
import SearchForm from "./components/SearchForm/SearchForm";
const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos?query=`;

function App() {
	const [isLoading, setIsLoading] = useState(false);
	const [photos, setPhotos] = useState([]);
	const [searchPhotos, setSearchPhotos] = useState("");
	const [querry, setQuerry] = useState("");
	// const [page, setPage] = useState(0);
	const [page, setPage] = useState(1);

	let timeout;
	const debounce = (e) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			setQuerry(e);
		}, 2000);
	};

	/*
function debounce(callback, time) {
    let interval;
    return () => {
        clearTimeout(interval)
        interval = setTimeout(() => {
                interval = null
                callback(arguments)
            }, time)
    }
}

sadsadsa
const optimisedSearchHandler = debounceFunc(searchHandler, 500)
const debounceFunc = (func, delay) => {
   let timer;
    return function(...args) {
       const context = this;
       clearTimeOut(timer);
       timer = setTimeOut(() => {
           func.apply(context, args);
       }, delay)
     }
}
*/
	const fetchPhotos = async () => {
		setIsLoading(true);
		let url;

		const urlPage = `&page=${page}`;
		// const urlPage = `&page=${page === 0 ? 1 : page}`;
		url = `${mainUrl}${clientID}${urlPage}`;
		let urlSearch = searchUrl + searchPhotos + "/" + clientID;
		try {
			const response = await fetch(url);
			const data = await response.json();

			setPhotos([...photos, ...data]);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(true);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchPhotos();
		setIsLoading(true);
	}, [page]);

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
					return old + 1 / 2;
				});
				return;
			}
			return () => window.removeEventListener("scroll", event);
		});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setQuerry(searchPhotos);
		console.log("btn");
		setSearchPhotos("");
	};
	return (
		<main className="app">
			<button onClick={debounce}>Debounce</button>
			<input onChange={(e) => debounce(e.target.value)} type="text" />
			<SearchForm
				search={searchPhotos}
				setSearch={setSearchPhotos}
				handleSubmit={handleSubmit}
			/>
			{isLoading && <Loading />}
			{photos.length > 0 && (
				<PhotoCardGallery photos={photos} isLoading={isLoading} page={page} />
			)}
		</main>
	);
}

export default App;
