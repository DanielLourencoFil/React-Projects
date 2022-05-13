import { useContext, useEffect, useState, createContext } from "react";
import { calcLanguage } from "./utils/calcLanguage";
import { calcReposPopularity } from "./utils/calcReposPopularity";
import axios from "axios";

const globalContextAPI = createContext("");

const GlobalContext = ({ children }) => {
	const rootUrl = "https://api.github.com";
	//loading and alerts
	const [loading, setLoading] = useState({ global: true, followers: true });
	const [alert, setAlert] = useState({ status: 0, msg: "", disabled: false });
	//inputs
	const [searchInput, setSearchInput] = useState("");
	const [query, setQuery] = useState("");
	// remaining requests
	const [requests, setRequests] = useState({ limit: 60, remaining: 1 });
	// followers pages
	const [pages, setPages] = useState(1);
	//fetch data - infinity scroll functionality
	const [gitHubUser, setGitHubUser] = useState([]);
	const [followers, setFollowers] = useState([]);
	const [repos, setRepos] = useState([]);
	// calc data for charts
	const [chartData, setChartData] = useState([]);

	const checkRequest = async () => {
		try {
			const {
				data: { rate },
			} = await axios.get(`${rootUrl}/rate_limit`);
			console.log(rate);
			setRequests({ limit: rate.limit, remaining: rate.remaining });
			if (requests.remaining > 0) {
				setAlert({
					disabled: false,
					status: 0,
					msg: "",
				});
			} else {
				setAlert({
					disabled: true,
					status: 2,
					msg: "Limit of request per hour is out, please try again latter",
				});
			}
		} catch (error) {
			console.log(error);
		}
	};
	const fetchUser = async () => {
		try {
			const userResponse = await axios.get(`${rootUrl}/users/${query}`);
			const reposResponse = await axios.get(
				`${rootUrl}/users/${query}/repos?per_page=100`
			);
			setGitHubUser(userResponse.data);
			setRepos(reposResponse.data);
			setSearchInput("");
		} catch (error) {
			console.log(error);
			if (error.response.data.message === "Not Found") {
				setAlert({ ...alert, status: 3, msg: "User not found" });
			}
		}
	};
	const fetchFollowers = async () => {
		try {
			const { data } = await axios.get(
				`${rootUrl}/users/${query}/followers?per_page=100&page=${pages}`
			);
			//set followers if search request
			if (pages === 1) {
				setFollowers(data);
			}
			// set followers for infinity scroll functionality
			else {
				setFollowers([...followers, ...data]);
			}
		} catch (error) {
			console.log(error);
		}
	};

	//when app first loads check number of remaining search requests
	useEffect(() => {
		setLoading({ global: true, followers: true });
		checkRequest();
		setLoading({ global: false, followers: false });
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (searchInput.length > 0 || query.length > 0) {
			setLoading({ global: true, followers: true });
			fetchUser();
			fetchFollowers();
			// fetchRepos();
			checkRequest();
			setLoading({ global: false, followers: false });
		}
		// eslint-disable-next-line
	}, [query]);

	//fetch followers for infinity scroll functionality
	useEffect(() => {
		setLoading({ global: false, followers: true });

		if (gitHubUser.length === 0) return; //prevent fetch on initial render

		fetchFollowers();
		checkRequest();
		setLoading({ global: false, followers: false });
		// eslint-disable-next-line
	}, [pages]);

	//calc chart data after fetch user repos
	useEffect(() => {
		// if (!repos || repos === undefined || repos.length === 0) return; //prevent fetch on initial render

		const dataLang = calcLanguage(repos);
		setChartData((data) => {
			return { ...data, language: dataLang };
		});
		const dataPop = calcReposPopularity(repos);
		setChartData((data) => {
			return { ...data, popularity: dataPop };
		});
		// eslint-disable-next-line
	}, [repos]);

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("submit btn");
		setPages(1);
		let timeout;
		if (!searchInput) {
			setAlert({
				...alert,
				status: 1,
				msg: "Please, provide the name of a gitHubUser",
			});
			timeout = setTimeout(() => {
				setAlert({ ...alert, status: 0, msg: "" });
			}, 3500);
			return () => clearTimeout(timeout);
		} else {
			setQuery(searchInput);
		}
	};

	return (
		<globalContextAPI.Provider
			value={{
				loading,
				gitHubUser,
				followers,
				repos,
				searchInput,
				chartData,
				alert,
				requests,
				pages,
				setAlert,
				setPages,
				setSearchInput,
				handleSubmit,
			}}
		>
			{children}
		</globalContextAPI.Provider>
	);
};

export const GlobalContextAPIHook = () => {
	return useContext(globalContextAPI);
};
export default GlobalContext;
