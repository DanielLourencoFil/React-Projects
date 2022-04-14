import React from "react";
import "./SearchBar.css";
import { useDataCocktails } from "../../context";

const SearchBar = () => {
	const { search, setSearch } = useDataCocktails();
	return (
		<div className="searchbar-container">
			<label htmlFor="searchbar">
				Search Your Favourite Cocktail
				<input
					type="text"
					onChange={(e) => setSearch(e.target.value)}
					value={search}
				/>
			</label>
		</div>
	);
};

export default SearchBar;
