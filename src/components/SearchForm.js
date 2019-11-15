import React, { useState } from "react";

export default function SearchForm() {
	const [ result, setResult ] = useState();

	const handleChanges = (e) => {
		setResults(e.target.value);
	};

	const submitHandler = (e) => {
		e.preventDefault();
		const filtered = props.characters.filter((char) => {
			return char.name.toLowerCase().indexOf(result.toLowerCase()) !== -1;
		});
		props.search(filtered);
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<input
					id="name"
					type="text"
					name="textfield"
					value={query}
					onChange={handleChanges}
					placeholder="Search Here"
					
				/>
			</form>
		</div>
	);
}
