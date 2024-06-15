import React, { useContext } from 'react'
import CountryDropdown from '../CountryDropDown/CountryDropdown'
import PriceRangeDropdown from '../PriceRangeDropdown/PriceRangeDropdown'
import PropertyDropdown from '../PropertyDropdown/PropertyDropdown'
import './Search.css'
import { RiSearch2Line } from 'react-icons/ri';
import { RealEstateContext } from '../RealEstateContext/RealEstateContext' // Import the context you created

const Search = () => {

    return (
      <div className="search-container lg">
        <CountryDropdown />
        <PropertyDropdown />
        <PriceRangeDropdown />
    <button className="search-button">
          <RiSearch2Line />
        </button>
      </div>
    );
  };
export default Search