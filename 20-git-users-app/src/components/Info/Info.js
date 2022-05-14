import "./Info.css";
import { GlobalContextAPIHook } from "../../context/GlobalContext";
import { RiBookMarkLine } from "react-icons/ri";
import { BsPeople } from "react-icons/bs";
import { BiUserPlus } from "react-icons/bi";
import { BsCodeSquare } from "react-icons/bs";

const Info = () => {
	const { gitHubUser } = GlobalContextAPIHook();
	const { followers, following, public_gists, public_repos } = gitHubUser;
	const userInfo = [
		{
			name: "repos",
			icon: <RiBookMarkLine style={{ color: "#da4a91" }} />,
			number: public_repos,
			color: "#da4a9121",
		},
		{
			name: "followers",
			icon: <BsPeople style={{ color: "#2caeba" }} />,
			number: followers,
			color: "#2caeba21",
		},
		{
			name: "following",
			icon: <BiUserPlus style={{ color: "#5d55fa" }} />,
			number: following,
			color: "#5d55fa21",
		},
		{
			name: "gists",
			icon: <BsCodeSquare style={{ color: "#f0b429" }} />,
			number: public_gists,
			color: "#f0b42921",
		},
	];
	if (gitHubUser.length === 0) {
		return;
	}
	return (
		<section className="section-center info-container">
			{userInfo.map((info, index) => {
				const { name, icon, number, color } = info;
				return (
					<div key={index} className="wrapper info-card">
						<div
							className={`icon-container flex center`}
							style={{ backgroundColor: color }}
						>
							{icon}
						</div>
						<div className="info-text">
							<h1 className="info-number">{number}</h1>
							<p className="info-text">{name}</p>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default Info;
