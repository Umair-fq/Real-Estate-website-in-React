import React, { useContext } from 'react';
import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { RealEstateContext } from '../RealEstateContext/RealEstateContext';
import './Dropdown.css'
const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(RealEstateContext);

  return (
    <Menu as='div' className='dropdown'>
      <Menu.Button className='dropdown-btn'>
        <RiHome5Line className='dropdown-icon-primary'/>
        <span>{property}</span>
        <Menu as='div'>
          {({ open }) => (
            open ? <RiArrowUpSLine className='dropdown-icon-secondary'/>
                  : <RiArrowDownSLine className='dropdown-icon-secondary'/>
          )}
        </Menu>
      </Menu.Button>
      <Menu.Items className='menu-items'>
        {properties.map((propertyOption, index) => (
          <Menu.Item as='button' className='menu-item' key={index} onClick={() => setProperty(propertyOption)}>
            {propertyOption}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PropertyDropdown;
