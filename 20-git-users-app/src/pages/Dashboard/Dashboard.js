import "./Dashboard.css";
import { GlobalContextAPIHook } from "../../context/GlobalContext";
import {
	Info,
	Loader,
	Navbar,
	Repos,
	User,
	Search,
	Followers,
} from "../../components";

const Dashboard = () => {
	const { loading, gitHubUser, query } = GlobalContextAPIHook();
	console.log(query, !query);
	return (
		<main
			className={`section-main flex column ${
				loading?.global && "center"
			} dashboard `}
		>
			<Navbar />
			<Search />
			{loading?.global ? (
				<Loader />
			) : gitHubUser?.length === 0 && !query ? (
				<div className="no-user-display-msg">
					<h1>Please type a gituser to display user info!</h1>
				</div>
			) : (
				<>
					<Info />
					<div className="user-followers-container section-center">
						<User />
						<Followers />
					</div>
					<Repos />
					<div className="footer"></div>
				</>
			)}
		</main>
	);
};

export default Dashboard;
