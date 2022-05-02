import React, { useState, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import "./SearchForm.css";

const SearchForm = ({ setPhotos, searchPhotos, setSearchPhotos, setQuery }) => {
	const [isShowLine, setIsShowLine] = useState(false);
	const searchLineActive = useRef(null);
	const searchFormBtn = useRef(null);
	const handleSearch = (e) => {
		e.preventDefault();
		const searchValue = e.target.value;
		setSearchPhotos(searchValue);
	};

	const showLine = (e) => {
		setIsShowLine(!isShowLine);
		if (isShowLine) {
			searchLineActive.current.classList.remove("show-search-line");
		} else {
			searchLineActive.current.classList.add("show-search-line");
		}
		const emptyInput = setTimeout(() => {
			setSearchPhotos("");
		}, 200);
		return () => clearTimeout(emptyInput);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setPhotos([]);
		setQuery(searchPhotos);
		setSearchPhotos("");
	};
	return (
		<section className="search-form-container">
			<form className="search-form" action="" onChange={(e) => handleSearch(e)}>
				<div className="search-bar">
					<div className="search-line" ref={searchLineActive}></div>
					<input
						onFocus={(e) => showLine(e)}
						onBlur={(e) => showLine(e)}
						className="search-input"
						type="text"
						value={searchPhotos}
						onChange={(e) => handleSearch(e)}
						placeholder="Search"
					/>
					<button
						type="submit"
						className="search-btn"
						onClick={handleSubmit}
						ref={searchFormBtn}
					>
						<BiSearch />
					</button>
				</div>
			</form>
		</section>
	);
};

export default SearchForm;
