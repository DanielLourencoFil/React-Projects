import React from "react";
import { Link } from "react-router-dom";
import "./CocktailCard.css";

const CocktailCard = ({
	idDrink,
	strAlcoholic,
	strGlass,
	strDrink,
	strDrinkThumb,
}) => {
	return (
		<article key={idDrink} className="cocktail-card">
			{" "}
			<img className="cocktail-img" src={strDrinkThumb} alt={strDrink} />{" "}
			<div className="cocktail-info-container">
				<h2 className="cocktail-title">{strDrink}</h2>
				<p className="cocktail-glass">{strGlass}</p>{" "}
				<p className="cocktail-type">{strAlcoholic}</p>{" "}
			</div>
			<Link to={`single-cocktail/${idDrink}`} className="cocktail-btn">
				Details
			</Link>{" "}
		</article>
	);
};

export default CocktailCard;
