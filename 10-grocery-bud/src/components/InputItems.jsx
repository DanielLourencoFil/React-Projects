import React, { useState, useEffect, useRef } from "react";
import AlertMessage from "./AlertMessage";
import ItemComponent from "./ItemComponent";

const InputItems = () => {
	const [item, setItem] = useState("");
	const [list, setList] = useState([]);
	const [message, setMessage] = useState(0);
	const [edit, setEdit] = useState(false);
	const [itemEditId, setItemEditId] = useState("");
	const inputRef = useRef(null);
	console.log(list == null);
	// ============  LOCALSTORAGE UPDATE LIST AND DEFAULT RENDER
	useEffect(() => {
		const defaultList = JSON.parse(localStorage.getItem("groceryList"));
		console.log(defaultList);
		setList(defaultList);
	}, []);
	useEffect(() => {
		localStorage.setItem("groceryList", JSON.stringify(list));
	}, [list]);

	// ============  UPDATE LIST
	const listUpdate = (e) => {
		e.preventDefault();

		// === error for empty item
		if (!item) {
			setMessage(5);
			return;
		}
		// ===  update single item
		if (edit) {
			const updatedList = list.map((element) => {
				if (edit && element.id === itemEditId) {
					element.item = item;
				}
				return element;
			});
			setList(updatedList);
			setItem("");
			setMessage(3);
			setEdit(false);
			setItemEditId("");
			return;
		}
		// ===  update WHOLE LIST
		setList((list) => {
			const newItem = {
				id: new Date().getTime().toString(),
				item: item,
			};
			setItem("");
			setMessage(4);
			inputRef.current.focus();
			return [...list, newItem];
		});
	};

	// ============  EDIT SINGLE ITEM
	const editItem = (id, item) => {
		inputRef.current.focus();
		setItem(item);
		setItemEditId(id);
		setEdit(true);
	};

	// ============  DELETE SINGLE ITEM
	const deleteItem = (id) => {
		const newList = list.filter((element) => {
			return element.id !== id;
		});
		inputRef.current.focus();
		setItem("");
		setList(newList);
		setItemEditId("");
		setEdit(false);
		setMessage(1);
	};

	// ============  MESSAGE DISPLAY CONTROL
	useEffect(() => {
		const timeout = setTimeout(() => {
			setMessage(0);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [message]);

	// ============  CLEAR ALL ITEMS
	const clearList = () => {
		setList([]);
		setMessage(2);
	};
	return (
		<>
			<form className="input-container">
				<AlertMessage message={message} />

				<div className="input-btn-container">
					<input
						className="input-items"
						type="text"
						value={item}
						onChange={(e) => setItem(e.target.value)}
						placeholder="e.g Eggs"
						ref={inputRef}
					/>
					<button
						className="input-btn"
						type="submit"
						onClick={(e) => listUpdate(e)}
					>
						{edit ? "Edit" : "Add"}
					</button>
				</div>
				<section className="list-items-container">
					{list.length > 1 &&
						list.map((item) => {
							return (
								<ItemComponent
									key={item.id}
									{...item}
									editItem={editItem}
									deleteItem={deleteItem}
								/>
							);
						})}
				</section>
				{(list.length > 0 || list !== null) && (
					<button className="clear-btn" onClick={clearList}>
						Clear Items
					</button>
				)}
			</form>
		</>
	);
};

export default InputItems;
