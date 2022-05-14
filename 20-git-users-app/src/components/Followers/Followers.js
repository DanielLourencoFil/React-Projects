import React, { useRef } from "react";
import "./Followers.css";
import Card from "../common/Card/Card";
import { GlobalContextAPIHook } from "../../context/GlobalContext";
import LoaderSmall from "../Loader/LoaderSmall";

const Followers = () => {
	const { gitHubUser, followers, setPages, pages, loading } =
		GlobalContextAPIHook();
	const listInnerRef = useRef();
	const maxPagination = gitHubUser.followers / 100;
	const onScroll = () => {
		if (listInnerRef.current) {
			const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
			if (scrollTop + clientHeight === scrollHeight) {
				if (pages < maxPagination) {
					setPages((prev) => {
						return prev + 1;
					});
				}
			}
		}
	};
	if (gitHubUser.length === 0) {
		return;
	}
	return (
		<Card text="followers">
			<div
				className="followers-container"
				ref={listInnerRef}
				onScroll={onScroll}
			>
				{followers.map((follower, index) => {
					const { id, avatar_url, login, html_url } = follower;
					return (
						<div key={id + index} className="follower">
							<img className="follower-img" src={avatar_url} alt={login} />
							<div className="follower-info">
								<p className="follower-name">{login}</p>
								<a href={html_url}>
									<p className="follower-url">{html_url}</p>
								</a>
							</div>
						</div>
					);
				})}
			</div>
			{loading.followers && <LoaderSmall />}
		</Card>
	);
};

export default Followers;
