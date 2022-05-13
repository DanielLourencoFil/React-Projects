import { useContext, useEffect, useState, createContext } from "react";
import { calcLanguage } from "./utils/calcLanguage";
import { calcReposPopularity } from "./utils/calcReposPopularity";
import axios from "axios";

const globalContextAPI = createContext("");

const GlobalContext = ({ children }) => {
	const rootUrl = "https://api.github.com";
	//loading and alerts
	const defaultLoading = { global: true, followers: true };
	const notLoading = { global: false, followers: false };
	const [loading, setLoading] = useState(defaultLoading);
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
		setLoading(defaultLoading);
		try {
			const {
				data: { rate },
			} = await axios.get(`${rootUrl}/rate_limit`);
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
		setLoading(notLoading);
	};
	const fetchUser = async () => {
		setLoading(defaultLoading);
		try {
			const userResponse = await axios.get(`${rootUrl}/users/${query}`);
			const reposResponse = await axios.get(
				`${rootUrl}/users/${query}/repos?per_page=100`
			);
			const followersResponse = await axios.get(
				`${rootUrl}/users/${query}/followers?per_page=100&page=${1}`
			);
			Promise.allSettled([userResponse, reposResponse, followersResponse]).then(
				(result) => {
					const [userResponse, reposResponse, followersResponse] = result;
					if (userResponse.status === "fulfilled") {
						setGitHubUser(userResponse.value.data);
					}
					if (reposResponse.status === "fulfilled") {
						setRepos(reposResponse.value.data);
					}
					if (followersResponse.status === "fulfilled") {
						setFollowers(followersResponse.value.data);
					}
					setLoading(notLoading);
				}
			);
			setSearchInput("");
		} catch (error) {
			console.log(error);
			if (error.response.data.message === "Not Found") {
				setAlert({ ...alert, status: 3, msg: "User not found" });
			}
			setLoading(notLoading);
		}
	};
	const fetchFollowers = async () => {
		setLoading({ global: false, followers: true });
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
		setLoading({ global: false, followers: false });
	};

	//when app first loads check number of remaining search requests
	useEffect(() => {
		checkRequest();
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		if (searchInput.length > 0 || query.length > 0) {
			fetchUser();
			checkRequest();
		}
		// eslint-disable-next-line
	}, [query]);

	//fetch followers for infinity scroll functionality
	useEffect(() => {
		if (gitHubUser.length === 0) return; //prevent fetch on initial render

		fetchFollowers();
		checkRequest();
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
		setLoading(defaultLoading);
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
				query,
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
