import React from "react";
import { useGlobalContext } from "../../context";
import { FaTimes } from "react-icons/fa";
import "./ModalMenu.css";
import { dataSubmenu } from "../../data";

const ModalMenu = () => {
	const { isModalMenuOpen, modalMenuOpen } = useGlobalContext();
	return (
		<aside
			className={`modal-menu-container ${isModalMenuOpen ? "show-modal" : ""}`}
		>
			<div className="modal-menu-center">
				<button className="close-btn" onClick={() => modalMenuOpen(false)}>
					<FaTimes />
				</button>
				{dataSubmenu.map((item, index) => {
					const { menu, submenu } = item;
					return (
						<article key={index} className="menu-links">
							<h4>{menu}</h4>
							<div className="submenu-links">
								{submenu.map((subItem, index) => {
									const { name, url, icon } = subItem;
									return (
										<a key={index} href={url}>
											<p>
												{icon}
												{name}
											</p>
										</a>
									);
								})}
							</div>
						</article>
					);
				})}
			</div>
		</aside>
	);
};

export default ModalMenu;
