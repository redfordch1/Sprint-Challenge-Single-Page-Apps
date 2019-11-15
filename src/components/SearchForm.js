import React, { useState, useEffect } from "react";

export default function SearchForm(props) {
	const [ result, setResult ] = useState([]);

	const handleChanges = (e) => {
		setResult(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const filtered = props.characters.filter((char) => {
			return char.name.toLowerCase().indexOf(result.toLowerCase()) !== -1;
		});
		props.search(filtered);
	};
	return (
		<section className="search-form">
			<form onSubmit={submitHandler}>
				<input onChange={handleChanges} type="text" name="character" id="character" placeholder="Search Here" />
			</form>
		</section>
	);
}
