import React from "react";
import "./Home.css";
import SearchBar from "../components/SearchBar/SearchBar";
import CocktailCard from "../components/CocktailCard/CocktailCard";
import { useDataCocktails } from "../context";
import Loading from "../components/Loading/Loading";

const Home = () => {
	const { cocktails } = useDataCocktails();

	return (
		<div className="main-section cocktails">
			<SearchBar />
			<div className="cocktails-container">
				{!cocktails && <Loading />}
				{cocktails &&
					cocktails.map((cocktail) => {
						return <CocktailCard key={cocktail.idDrink} {...cocktail} />;
					})}
			</div>
		</div>
	);
};

export default Home;
