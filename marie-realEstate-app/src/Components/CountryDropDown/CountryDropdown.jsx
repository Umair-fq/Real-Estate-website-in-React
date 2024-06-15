import React, { useContext } from 'react';
import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { RealEstateContext } from '../RealEstateContext/RealEstateContext';
import '../PropertyDropdown/Dropdown.css'; // Import the styles

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(RealEstateContext);

  return (
    <Menu as='div' className='dropdown'>
      <Menu.Button className='dropdown-btn'>
        <RiMapPinLine className='dropdown-icon-primary'/>
        <span>{country}</span>
        <Menu as='div'>
          {({ open }) => (
            open ? <RiArrowUpSLine className='dropdown-icon-secondary'/>
                  : <RiArrowDownSLine className='dropdown-icon-secondary'/>
          )}
        </Menu>
      </Menu.Button>
      <Menu.Items className='menu-items'>
        {countries.map((countryOption, index) => (
          <Menu.Item as='button' className='menu-item' key={index} onClick={() => setCountry(countryOption)}>
            {countryOption}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default CountryDropdown;
