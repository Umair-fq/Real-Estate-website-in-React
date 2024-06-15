import React from 'react'
import './House.css'

import { BiBed, BiBath, BiArea } from 'react-icons/bi';

const House = ({ house }) => {
    const { image, type, country, address, bedrooms, bathrooms, surface, price} = house;
    return (
        <div className="house">
            <img src={image} alt={`${type} in ${country}`} />
            <div>
                <div className="house-type-country">
                    {type} - {country}
                </div>
                <div className="house-address">
                    {address}
                </div>
                <div className="flex-gap">
                    <div>
                        <BiBed className="text-icon" />
                        {bedrooms}
                    </div>
                    <div>
                        <BiBath className="text-icon" />
                        {bathrooms}
                    </div>
                    <div>
                        <BiArea className="text-icon" />
                        {surface}
                    </div>
                </div>
            </div>
            <div className="house-price">
                ${price}
            </div>
        </div>
    )
}

export default House