import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function WelcomePage() {
	const Img = styled.img`
		border-radius: 20px;
		width: 50%;
		height: 300px;
		margin: 0 auto;
	`;

	return (
		<section className="welcome-page">
			<header>
				<h1>Welcome to the ultimate fan site!</h1>
				<Img className="main-img" src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="rick" />
			</header>
			<div className="linkContainer">
				<Link className="main__1" to={"/characters"}>
					Click to see Characters
				</Link>
			</div>
		</section>
	);
}
