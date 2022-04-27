import React, { useState, useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchForm.css";

const SearchForm = () => {
	const [search, setSearch] = useState("");
	const [isShowLine, setIsShowLine] = useState(false);
	const searchLineActive = useRef(null);
	const handleSearch = (e) => {
		e.preventDefault();
		const searchValue = e.target.value;
		setSearch(searchValue);
	};
	const handleSumbit = (e) => {
		e.preventDefault();
		console.log("btn");
	};
	const showLine = (e) => {
		setIsShowLine(!isShowLine);
		if (isShowLine) {
			searchLineActive.current.classList.remove("show-search-line");
		} else {
			searchLineActive.current.classList.add("show-search-line");
		}
	};
	return (
		<section className="search-form-container">
			<form className="search-form" action="" onChange={(e) => handleSearch(e)}>
				<div className="search-bar">
					<div className="search-line" ref={searchLineActive}></div>
					<input
						onFocus={() => showLine()}
						onBlur={() => showLine()}
						className="search-input"
						type="text"
						value={search}
						onChange={(e) => handleSearch(e)}
						placeholder="Search"
					/>
					<button className="search-btn" onClick={handleSumbit}>
						<BiSearch />
					</button>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
