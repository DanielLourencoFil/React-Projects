import React, { useState, useContext, useReducer, useEffect } from "react";
// import cartItems from "./data";
import reducer from "./reducer";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-useReducer-cart-project";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [totalCartItems, setTotalCartItems] = useState(0);
	const [totalCartValue, setTotalCartValue] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [cart, dispatch] = useReducer(reducer, []);

	const fetchDataCart = async () => {
		const response = await fetch(url);
		const cartData = await response.json();
		setIsLoading(false);
		dispatch({ type: "DATA_LOAD", payload: cartData });
	};

	useEffect(() => {
		fetchDataCart();
	}, []);

	useEffect(() => {
		dispatch(
			{
				type: "TOTALS",
				payload: { setTotalCartItems, setTotalCartValue },
			},
			[cart]
		);
	});

	const addItems = (id) => {
		dispatch({ type: "ADD_ITEMS", payload: id });
	};
	const removeItems = (id) => {
		dispatch({ type: "REMOVE_ITEMS", payload: id });
	};
	const removeAllItems = (id) => {
		dispatch({ type: "REMOVE_ALL_ITEMS", payload: id });
	};
	const clearItems = () => {
		dispatch({ type: "CLEAR_CARD" });
	};

	return (
		<AppContext.Provider
			value={{
				cart,
				totalCartItems,
				totalCartValue,
				isLoading,
				addItems,
				removeItems,
				clearItems,
				removeAllItems,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
// make sure use
export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
