import { useEffect, useState } from "react";
import "./Search.css";
import { checkScreenWidth } from "../../utils/checkScreenWidth";
import { BiSearch } from "react-icons/bi";
import { GlobalContextAPIHook } from "../../context/GlobalContext";

const Search = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(false);
	const {
		handleSubmit,
		setSearchInput,
		searchInput,
		alert,
		setAlert,
		requests,
	} = GlobalContextAPIHook();

	//check screen width after every render
	useEffect(() => {
		checkScreenWidth(400, setIsSmallScreen);
		// eslint-disable-next-line
	});

	return (
		<div className="section-center search-container flex space-between">
			<p className="search-input-alert">
				{(alert.status === 0 && alert.msg) ||
					(alert.status === 1 && alert.msg) ||
					(alert.status === 2 && alert.msg) ||
					(alert.status === 3 && alert.msg)}
			</p>
			<form className="searchbar wrapper flex">
				{!isSmallScreen && <BiSearch className="search-icon" />}
				<input
					type="text"
					className="search-input"
					onChange={(e) => setSearchInput(e.target.value)}
					onFocus={() => setAlert({ ...alert, status: 0, msg: "" })}
					on
					value={searchInput}
					placeholder="enter github user"
				/>
				{!isSmallScreen ? (
					<button
						className="generic-btn search-btn"
						onClick={handleSubmit}
						disabled={alert.status === 2 ? alert.disabled : false}
					>
						Search
					</button>
				) : (
					<button
						className="search-btn-small"
						onClick={handleSubmit}
						disabled={alert.status === 2 ? alert.disabled : false}
					>
						<BiSearch />
					</button>
				)}
			</form>
			<div className="request-counter">
				<span className="request-counter">Requests: </span>
				<span className="request-counter">
					{requests.remaining} / {requests.limit}
				</span>
			</div>
		</div>
	);
};

export default Search;
