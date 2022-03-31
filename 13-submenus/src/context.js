import React, { useContext, createContext, useState } from "react";
import { dataSubmenu } from "./data";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
	const [isModalMenuOpen, setIsModalMenuOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [submenuLinks, setsubmenuLinks] = useState({ menu: "", submenu: [] });
	const [submenuData, setSubmenuData] = useState({
		text: "",
		height: "",
		center: "",
	});

	const modalMenuOpen = (show) => {
		setIsModalMenuOpen(show);
	};
	const submenuOpen = (show, data) => {
		if (show) {
			const links = dataSubmenu.find((item) => item.menu === data.text);
			setsubmenuLinks(links);
			setSubmenuData(data);
			setIsSubmenuOpen(show);
		} else {
			setIsSubmenuOpen(show);
		}
	};

	return (
		<AppContext.Provider
			value={{
				isModalMenuOpen,
				isSubmenuOpen,
				submenuData,
				submenuLinks,
				modalMenuOpen,
				submenuOpen,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
