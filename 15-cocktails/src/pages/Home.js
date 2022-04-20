import React from "react";
import "./Home.css";
import SearchBar from "../components/SearchBar/SearchBar";
import CocktailCard from "../components/CocktailCard/CocktailCard";
import { useDataCocktails } from "../context";
import Loading from "../components/Loading/Loading";

const Home = () => {
	const { cocktails } = useDataCocktails();

	if (!cocktails && cocktails !== null) {
		return <Loading />;
	}
	return (
		<div className="main-section cocktails">
			<SearchBar />
			{cocktails === null && (
				<p className="not-found-text">
					Sorry, no cocktails found for your search!
				</p>
			)}
			<div className="cocktails-container">
				{cocktails &&
					cocktails.map((cocktail) => {
						return <CocktailCard key={cocktail.idDrink} {...cocktail} />;
					})}
			</div>
		</div>
	);
};

export default Home;
