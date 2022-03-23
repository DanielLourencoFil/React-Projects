import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const ItemComponent = ({ id, item, editItem, deleteItem }) => {
	return (
		<article className="item-container" key={id}>
			<p>{item}</p>
			<div className="btn-container">
				<FaEdit
					className="edit-btn edit-icon"
					onClick={() => editItem(id, item)}
				/>
				<FaTrash
					className="edit-btn delete-icon"
					onClick={() => deleteItem(id)}
				/>
			</div>
		</article>
	);
};

export default ItemComponent;
