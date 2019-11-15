import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

export default function CharacterList() {
	// TODO: Add useState to track data from useEffect

	const [ char, setChar ] = useState([]);
	const [ filtered, setFiltered ] = useState([]);

	const search = (array) => {
		setFiltered(array);
	};

	useEffect(() => {
		// TODO: Add API Request here - must run in `useEffect`
		//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
		axios.get("https://rickandmortyapi.com/api/character/").then((response) => {
			console.log(response.data.results);
			setChar(response.data.results);
			setFiltered(response.data.results);
		});
	}, []);

	return (
		<section className="character-list">
			<h2>Characters</h2>
			<Link className="main__1" to={"/"}>
				Home
			</Link>
			<SearchForm search={search} character={char} />
			{filtered.map((character) => {
				return <CharacterCard key={character.id} character={character} />;
			})}
		</section>
	);
}
