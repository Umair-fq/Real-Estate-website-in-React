import React, { useContext } from 'react';
import { RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { Menu } from '@headlessui/react';
import { RealEstateContext } from '../RealEstateContext/RealEstateContext';
import '../PropertyDropdown/Dropdown.css'

const PriceRangeDropdown = () => {
  const { price, setPriceRange } = useContext(RealEstateContext);

  const priceRange = [
    'Price range (any)',
    '100000 - 150000',
    '170000 - 200000',
    '210000 - 250000',
    '251000 - 300000',
  ];

  return (
    <Menu as='div' className='dropdown'>
      <Menu.Button className='dropdown-btn'>
        <RiWallet3Line className='dropdown-icon-primary'/>
        <span>{price}</span>
        <Menu as='div'>
          {({ open }) => (
            open ? <RiArrowUpSLine className='dropdown-icon-secondary'/>
                  : <RiArrowDownSLine className='dropdown-icon-secondary'/>
          )}
        </Menu>
      </Menu.Button>
      <Menu.Items className='menu-items'>
        {priceRange.map((priceValue, index) => (
          <Menu.Item as='button' className='menu-item' key={index} onClick={() => setPriceRange(priceValue)}>
            {priceValue}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default PriceRangeDropdown;
