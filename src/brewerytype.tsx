export interface BreweryType{
    name: string;
    brewery_type: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
    phone: string;
    website_url: string;
}

export interface BreweriesType {
  Breweries: BreweryType[]
}