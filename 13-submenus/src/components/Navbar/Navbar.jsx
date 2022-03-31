import Logo01 from "./Logo01";
import { FaBars } from "react-icons/fa";
import NavLinks from "./NavLinks";
import DarkBtn from "../buttons/DarkBtn";
import "./Navbar.css";
import { useGlobalContext } from "../../context";

function Navbar() {
	const { modalMenuOpen, submenuOpen } = useGlobalContext();

	const closeSubmenu = (e) => {
		if (!e.target.classList.contains("menu-link-btn")) {
			submenuOpen(false);
		}
	};
	return (
		<>
			<nav className="navbar" onMouseOver={closeSubmenu}>
				<div className=" section-center navbar-center">
					<div className="navbar-header">
						<Logo01 />
						<DarkBtn
							extraCss={"burguer-btn hide-btn"}
							text={<FaBars className="burguer-icon" />}
							cb={() => modalMenuOpen(true)}
						/>
					</div>
					<NavLinks />
					<DarkBtn extraCss={"show-btn"} text={"Sign In"} type={"submit"} />
				</div>
			</nav>
		</>
	);
}

export default Navbar;
