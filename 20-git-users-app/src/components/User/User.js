import "./User.css";
import Card from "../common/Card/Card";
import { GlobalContextAPIHook } from "../../context/GlobalContext";
import { BiBuildings } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import { FiLink2 } from "react-icons/fi";

const User = () => {
	const { gitHubUser } = GlobalContextAPIHook();
	const { avatar_url, html_url, name, login, bio, company, location, blog } =
		gitHubUser;

	return (
		<Card text="User">
			<div className="user-container">
				<div className="user-card-header">
					<div className="user-info-header">
						<img className="user-header-img" src={avatar_url} alt={name} />
						<div>
							<h1>{name}</h1>
							<h2>@{login}</h2>
						</div>
					</div>
					<button className="user-follow-btn">
						<a href={html_url}>Follow</a>
					</button>
				</div>
				<div className="user-info-body">
					<p className="user-bio">{bio}</p>
					<div className="user-info">
						<BiBuildings />
						<p>{company}</p>{" "}
					</div>
					<div className="user-info">
						<MdLocationOn />
						<p>{location}</p>{" "}
					</div>
					<div className="user-info">
						<FiLink2 />
						<a href={blog}>
							<p className="special-text">{blog}</p>
						</a>{" "}
					</div>
				</div>
			</div>
		</Card>
	);
};

export default User;
