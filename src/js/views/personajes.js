import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext.js";
import { Card } from "../component/card.js";
// Los pasos: useContext es una funcion de React. Context contiene del flux el getState, que esta compuesto por el store y las actions.

export const Characters = () => {
	const { store, actions } = useContext(Context); //Saco store y actions, las que serán iguales al hook useContext, y le pasamos el contexto

	useEffect(() => {
		actions.listaCharacters();
	}, []);

	return (
		<div className="container">
			<h1>Personajes</h1>
			<div className="row flex-row flex-nowrap">
				{store.peopleList.map((item, index) => {
					const dataPerson = [
						{
							label: "Gender",
							value: item.gender
						},
						{
							label: "Hair",
							value: item.hair_color
						},
						{
							label: "Eyes",
							value: item.eye_color
						}
					];
					let linkUrl = index + 1;
					// console.log("el elemento es ", item);
					return (
						<Card
							key={index}
							url="http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg"
							title={item.name}
							link={"https://swapi.dev/api/people/" + linkUrl}
							contenido={dataPerson}
						/>
					);
				})}
			</div>
		</div>
	);
};
