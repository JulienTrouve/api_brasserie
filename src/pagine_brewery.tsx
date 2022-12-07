import React from "react";
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom'
import { BreweryType, BreweriesType } from "./brewerytype";

export const PagineBreweryLoader = async ({params}: LoaderFunctionArgs): Promise<BreweriesType> => {
    const results = await fetch(`https://api.openbrewerydb.org/breweries?page=${params.page}&per_page=5`);
  
    if (!results.ok) throw new Error('Something went wrong!');
  
    const Breweries = await results.json();
  
    return { Breweries };
}

const ListBrewery = () => {
    const { Breweries } = useLoaderData() as BreweriesType;

    console.log(Breweries);
  
    return (
      <>
        {
          Breweries.map(brew => (
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
          ))
        }
        <button className="button" onclick={changePage()} >Page suivante</button>
      </>
    );
};

export default ListBrewery;

function changePage(){
  let res = location.search
  let page  = res.substring(33,34)
  document.location.href="http://localhost:3000/brasserie:$"; 
}