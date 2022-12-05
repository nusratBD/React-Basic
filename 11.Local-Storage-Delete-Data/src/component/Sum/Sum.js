import React from 'react';
import { objRed, reducer } from '../../utilities/fakedb';

const Sum = () => {
    const result1 = reducer();
    const result2 = objRed();
    return (
        <div>
            <h1>Array Sum: {result1}</h1>
            <h2>Object Sum: {result2}</h2>
        </div>
    );
};

export default Sum;