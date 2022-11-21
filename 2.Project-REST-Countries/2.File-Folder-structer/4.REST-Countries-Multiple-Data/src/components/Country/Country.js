import React from 'react';
import './Country.css'

const Country = (props) => {
   const {name, area, region, flags} = props.country;
    return (
        <div className='country'>
            {/* {console.log(props.country)} */}
            {/*We get an error in the browser:
            react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.
            Solution: We must use a key to solve this problem.
            It improves the performance of react.*/}
            <h1>Name: {name.common}</h1>
            <img src={flags.png}></img>
            <h2>Area: {area}</h2>
            <h3>Region: {region}</h3>
        </div>
    );
};

export default Country;