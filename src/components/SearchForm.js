import React, { useState } from "react";

export default function SearchForm(props) {
	const [ result, setResult ] = useState();

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
				<input id="name" type="text" name="textfield" onChange={handleChanges} placeholder="Search Here" />
			</form>
		</section>
	);
}
