import React, { useContext } from 'react'
import { RealEstateContext } from '../RealEstateContext/RealEstateContext'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import House from '../House/House';
import { ImSpinner2 } from 'react-icons/im'
import './HouseList.css'

const HouseList = () => {
    const {houses, loading} = useContext(RealEstateContext);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <ImSpinner2 className="animate-spin text-4xl" />
        </div>;
    }

    return (
        <section className="section-house-list">
            <div className="container">
                <div className="grid">
                    {houses.map((house, index) => (
                        <Link to={`/house/${house.id}`} key={index} className="house-link">
                            <House house={house} />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default HouseList