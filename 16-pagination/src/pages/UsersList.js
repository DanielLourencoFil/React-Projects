import React, { useState } from "react";
import { ApiGlobalContext } from "../context";
import "./UsersList.css";

const UsersList = () => {
	const { users, perPage } = ApiGlobalContext();
	const [pages, setPages] = useState(perPage);
	const changePage = (btn) => {
		console.log(btn);
		if (btn === "next") {
			if (pages > users.length - perPage) {
				setPages(perPage);
			} else {
				setPages(pages + perPage);
			}
		}
		if (btn === "prev") {
			if (pages <= perPage) {
				console.log("yes");
				setPages((users.length / perPage) * perPage);
			} else {
				setPages(pages - perPage);
			}
			console.log(pages);
		}
	};
	const changePageByNumber = (number) => {
		setPages(number * perPage);
		console.log(pages);
	};
	return (
		<section className="user-list-section">
			<div className="user-list-container">
				{users.map((user, index) => {
					const { avatar, name, url } = user;
					if (index + 1 <= pages && index >= pages - perPage) {
						return (
							<article key={index} className="user-card">
								<img className="user-img" src={avatar} alt={name} />
								<p className="username-card">{name}</p>
								<button className="user-link-btn">
									<a href={url} target="_blank" rel="noreferrer">
										View Profile
									</a>
								</button>
							</article>
						);
					}
					return;
				})}
			</div>
			<div className="pagination">
				<button className="move-page-btn" onClick={() => changePage("prev")}>
					Prev
				</button>
				<div className="pages-container">
					{users.map((user, index) => {
						console.log(users.length / perPage);
						if (index + 1 <= users.length / perPage) {
							return (
								<button
									className={`${
										index + 1 === pages / perPage
											? "page-number-btn-active page-number-btn"
											: "page-number-btn"
									}`}
									onClick={() => changePageByNumber(index + 1)}
								>
									{index + 1}
								</button>
							);
						}
						return;
					})}
				</div>
				<button className="move-page-btn" onClick={() => changePage("next")}>
					Next
				</button>
			</div>
		</section>
	);
};

export default UsersList;
