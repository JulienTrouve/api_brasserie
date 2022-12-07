import React from "react";
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom';
import { BreweryType } from "./brewerytype";

export const RandomBreweryLoader = async ({ params } : LoaderFunctionArgs): Promise<BreweryType> => {
    const results = await fetch(`https://api.openbrewerydb.org/breweries/random`, {cache:"reload"});
  
    if (!results.ok) throw new Error('Something went wrong!');
  
    const Brewery = await results.json();
  
    return Brewery[0];
}

const RandomBrewery = () => {
    const brew = useLoaderData() as BreweryType;
    console.log(brew);
    return (
      <>
      <div className="box">
        <h3> Nom: { brew.name } </h3>
        <h3> Type: { brew.brewery_type } </h3>
        <h3> Ville: { brew.city } </h3>
        <h3> Etat: { brew.state } </h3>
        <h3> Code postal: { brew.postal_code } </h3>
        <h3> Pays: { brew.country } </h3>
        <h3> Téléphone: { brew.phone } </h3>
        <h3> Site: { brew.website_url } </h3>
      </div>
      </>
    );
};

export default RandomBrewery;