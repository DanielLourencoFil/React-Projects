import React from "react";
import "./SingleCocktail.css";
import { Link, useParams } from "react-router-dom";
import { useDataCocktails } from "../context";

const SingleCocktail = () => {
	const { idDrink } = useParams();
	const { cocktails } = useDataCocktails();
	const cocktail = cocktails.find((item) => item.idDrink === idDrink);
	const {
		strDrink,
		strDrinkThumb,
		strCategory,
		strAlcoholic,
		strGlass,
		strInstructions,
	} = cocktail;

	let cocktailIngredients = [];
	for (let i = 0; i < 20; i++) {
		if (cocktail[`strIngredient${i}`]) {
			cocktailIngredients.push(cocktail[`strIngredient${i}`]);
		}
	}
	console.log(cocktailIngredients);

	return (
		<div className="main-section">
			<Link to="/" className="back-btn">
				Back to Search
			</Link>
			<h1 className="single-cocktail-main-title">{strDrink}</h1>
			<section className="single-cocktail">
				<div className="single-cocktail-header">
					<img src={strDrinkThumb} alt={strDrink} />
				</div>
				<div className="single-cocktail-info">
					<p className="single-cocktail-info-row">
						<span className="info-detail">Name: </span>
						{strDrink}
					</p>
					<p className="single-cocktail-info-row">
						<span className="info-detail">Category: </span>
						{strCategory}
					</p>
					<p className="single-cocktail-info-row">
						<span className="info-detail">Info: </span>
						{strAlcoholic}
					</p>
					<p className="single-cocktail-info-row">
						<span className="info-detail">Glass: </span>
						{strGlass}
					</p>
					<p className="single-cocktail-info-row">
						<span className="info-detail">Instructions: </span>
						{strInstructions}
					</p>
					<p className="single-cocktail-info-row">
						<span className="info-detail">Ingredients:</span>
						{cocktailIngredients.join(", ")}
					</p>
				</div>
			</section>
		</div>
	);
};

export default SingleCocktail;
