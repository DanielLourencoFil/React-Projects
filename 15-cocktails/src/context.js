import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DataContext = createContext(null);

const ContextProvider = ({ children }) => {
	const [search, setSearch] = useState("");
	const [cocktails, setCocktails] = useState();

	useEffect(() => {
		fetchData(search);
	}, [search]);

	const fetchData = async (search) => {
		const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${
			search || "a"
		}`;
		try {
			const { data } = await axios(url);
			if (data) {
				setCocktails(data.drinks);
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<DataContext.Provider
			value={{ search, setSearch, cocktails, setCocktails }}
		>
			{children}
		</DataContext.Provider>
	);
};
export const useDataCocktails = () => {
	return useContext(DataContext);
};

export default ContextProvider;
