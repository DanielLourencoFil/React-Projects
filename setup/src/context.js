import React, { useState, useContext } from "react";
import sublinks from "./data";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
	const [pagePosition, setPagePosition] = useState({});
	const [pageCurrent, setPageCurrent] = useState({ page: "", links: [] });

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openSubmenu = (text, coordinates) => {
		const page = sublinks.find((link) => link.page === text);
		setPageCurrent(page);
		setPagePosition(coordinates);
		setIsSubmenuOpen(true);
	};
	console.log(pageCurrent);
	const closeSubmenu = () => {
		setIsSubmenuOpen(false);
	};
	return (
		<AppContext.Provider
			value={{
				isSubmenuOpen,
				isSidebarOpen,
				pagePosition,
				pageCurrent,
				openSidebar,
				closeSidebar,
				openSubmenu,
				closeSubmenu,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
