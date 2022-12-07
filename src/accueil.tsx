import React from "react";
import { useLoaderData, LoaderFunctionArgs } from 'react-router-dom';
import { BreweryType } from "./brewerytype";

export const AccueilLoader = async ({ params } : LoaderFunctionArgs): Promise<BreweryType> => {
    const results = await fetch(`https://api.openbrewerydb.org/breweries/random`, {cache:"reload"});
  
    if (!results.ok) throw new Error('Something went wrong!');
  
    const Brewery = await results.json();
  
    return Brewery[0];
}

const AccueilPage = () => {
    return (
      <>
      <div className="box">
        <a href="http://localhost:3000/random">Random Breweries</a><br></br>
        <a href="http://localhost:3000/brasserie:1">Paginé</a><br></br>
      </div>
      </>
    );
};

export default AccueilPage;