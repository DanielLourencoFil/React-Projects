const reducer = (state, action) => {
	if (action.type === "DATA_LOAD") {
		return action.payload;
	}
	if (action.type === "ADD_ITEMS") {
		const cartUp = state.map((item) => {
			if (item.id === action.payload) {
				item.amount++;
			}
			return item;
		});
		console.log(cartUp);
		return cartUp;
	}
	if (action.type === "REMOVE_ITEMS") {
		const cartUpdate = state.map((item) => {
			if (item.id === action.payload) {
				item.amount--;
			}
			return item;
		});
		const cardFilter = cartUpdate.filter((item) => {
			console.log(item.amount);
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
	throw new Error("The action type does not match any action");
};
export default reducer;
