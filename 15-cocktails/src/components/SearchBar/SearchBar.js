import React, { useEffect, useRef } from "react";
import "./SearchBar.css";
import { useDataCocktails } from "../../context";

const SearchBar = () => {
	const { search, setSearch } = useDataCocktails();
	const input = useRef(null);
	useEffect(() => {
		input.current.focus();
	}, []);
	window.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			setSearch("");
		}
	});
	return (
		<div className="searchbar-container">
			<label htmlFor="searchbar">
				Search Your Favourite Cocktail
				<input
					type="text"
					onChange={(e) => setSearch(e.target.value)}
					ref={input}
					value={search}
				/>
			</label>
		</div>
	);
};

export default SearchBar;
