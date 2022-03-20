import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Menu = ({ data }) => {
	const [dataArray, setDataArray] = useState(data);
	const [category, setCategory] = useState(dataArray[0]);
	return (
		<section className="menu-container">
			<article className="menu-btn-container">
				{dataArray.map((item, index) => {
					const { company, order } = item;
					return (
						<button
							key={order}
							className={`menu-btn ${
								company === category.company ? "menu-btn-active" : ""
							}`}
							onClick={() => setCategory(dataArray[index])}
						>
							{company}
						</button>
					);
				})}
			</article>
			<article>
				<MenuItem key={0} {...category} />
			</article>
			<button className="menu-info-btn"> More Info</button>
		</section>
	);
};

export default Menu;
