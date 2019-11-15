import React from "react";

export default function CharacterCard(props) {
	return (
		<div className="SingleCard">
			<div>
				<img className="MainImg" src={props.character.image} />
				<div className="Info">
					<p>Name: {props.character.name}</p>
					<p>Gender: {props.character.gender}</p>
					<p>Species: {props.character.species}</p>
					<p>Origin: {props.character.origin.name}</p>
					<p>Created: {props.character.created}</p>
				</div>
			</div>
		</div>
	);
}
