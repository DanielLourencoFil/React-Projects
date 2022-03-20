import React from "react";

const BirthDaySinglePerson = ({ people }) => {
	return people.map((person) => {
		const { id, name, age, image } = person;
		return (
			<li key={id} className="single-person">
				<div className="person-img">
					<img src={image} alt={name} />
				</div>
				<div>
					<p className="person-name">{name}</p>
					<p>{age} years old</p>
				</div>
			</li>
		);
	});
};

export default BirthDaySinglePerson;
