import React from 'react';
import './Country.css'

const Country = (props) => {
   const {name, area, region} = props.country;
    return (
        <div className='country'>
            <h1>Name: {name.common}</h1>
            <h2>Area: {area}</h2>
            <h3>Region: {region}</h3>
        </div>
    );
};

export default Country;