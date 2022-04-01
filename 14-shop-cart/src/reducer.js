const reducer = (state, action) => {
	if (action.type === "DATA_LOAD") {
		return action.payload;
	}
	if (action.type === "ADD_ITEMS") {
		const cartUp = state.map((item) => {
			if (item.id === action.payload) {
				const { amount } = item;
				return { ...item, amount: item.amount + 1 };
			}
			return item;
		});
		return cartUp;
	}
	if (action.type === "REMOVE_ITEMS") {
		const cartUpdate = state.map((item) => {
			if (item.id === action.payload) {
				return { ...item, amount: item.amount - 1 };
			}
			return item;
		});
		const cardFilter = cartUpdate.filter((item) => {
			return item.amount > 0;
		});
		return cardFilter;
	}
	if (action.type === "REMOVE_ALL_ITEMS") {
		return state.filter((item) => item.id !== action.payload);
	}
	if (action.type === "CLEAR_CARD") {
		return [];
	}

	if (action.type === "TOTALS") {
		const { setTotalCartItems, setTotalCartValue } = action.payload;
		let totalItems = 0;
		let totalValue = 0;
		state.map((item) => {
			totalItems = totalItems + item.amount;
			totalValue = totalValue + item.price * item.amount;
		});
		totalValue = totalValue.toFixed(2);
		setTotalCartItems(totalItems);
		setTotalCartValue(totalValue);
		return state;
	}

	throw new Error(action.type, "The action type does not match any action");
};
export default reducer;
