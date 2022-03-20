import React from "react";

function MenuItem({ img, desc, price, title }) {
	return (
		<article className="item-container">
			<img src={img} alt={title} className="item-img" />
			<div>
				<header className="item-header">
					<h3 className="item-title">{title}</h3>
					<p className="item-price">${price}</p>
				</header>
				<p className="item-desc">{desc}</p>
			</div>
		</article>
	);
}

export default MenuItem;
