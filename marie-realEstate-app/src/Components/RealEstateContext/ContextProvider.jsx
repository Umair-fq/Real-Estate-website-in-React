import React, { useEffect, useState } from 'react'
import { RealEstateContext } from "./RealEstateContext";
import { data } from '../data'
const ContextProvider = ({children}) => {
  const [allHouses] = useState(data);
  const [houses, setHouses] = useState(data)
  const [country, setCountry] = useState('Location (any)');
  const [countries, setCountries] = useState([])
  const [property, setProperty] = useState('Property type (any)');
  const [properties, setProperties] = useState([]);
  const [price, setPriceRange] = useState('Price range (any)');
  const [loading, setLoading] = useState(false);

  // returning all countries
  useEffect(() => {
    const allCountries = houses.map((house) => {
      return house.country;
    })
    setCountries(['Location (any)', ... new Set(allCountries)]);
  }, [])


  // returning all properties
  useEffect(() => {
    const allProperties = houses.map((house) => {
      return house.type;
    })
    setProperties(['Property type (any)', ... new Set(allProperties)]);
   
  }, [])

  useEffect(() => {
    setLoading(true);
    let filteredHouses = allHouses;

    if (country !== 'Location (any)') {
      filteredHouses = filteredHouses.filter(h => h.country === country)
    }

    if (property !== 'Property type (any)') {
      filteredHouses = filteredHouses.filter(h => h.type === property)
    }

    if (price !== 'Price range (any)') {
      const [minPrice, maxPrice] = price.split(' - ').map(Number);
      filteredHouses = filteredHouses.filter(h => {
        const housePrice = parseInt(h.price, 10);
        return housePrice >= minPrice && housePrice <= maxPrice;
      })
    }

    setHouses(filteredHouses);
    setLoading(false);
  }, [country, property, price, allHouses])

  const contextValue = {
    country,
    setCountry,
    countries, 
    property,
    setProperty,
    properties,
    price,
    setPriceRange,
    houses,
    loading
    }
  return (
    <RealEstateContext.Provider value={contextValue}>
        {children}
    </RealEstateContext.Provider>
  )
}

export default ContextProvider