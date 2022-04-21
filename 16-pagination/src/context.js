import React, { useState, useContext, createContext, useEffect } from "react";

const url = "https://api.github.com/users/john-smilga/followers?per_page=100";

const GlobalContext = createContext("");

const ApiContext = ({ children }) => {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const [perPage, setPerPage] = useState(10);

	// const pagination = (array, itemsPerPage) => {
	// 	const pagesTotal = Math.ceil(array.length / itemsPerPage);
	// 	return new Array(pagesTotal)
	// 		.fill("")
	// 		.map((_, index) => array.slice(index * pagesTotal, (index + 1) * 10));
	// };

	const fetchUsers = async () => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			const newData = data.map((user) => {
				const { avatar_url, login, html_url } = user;
				return { avatar: avatar_url, name: login, url: html_url };
			});
			setUsers(newData);
			setLoading(true);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchUsers();
	}, []);

	return (
		<GlobalContext.Provider value={{ loading, users, perPage, setPerPage }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const ApiGlobalContext = () => {
	return useContext(GlobalContext);
};
export default ApiContext;
