import React from 'react';
import BackButton from './BackButton';

function Header({title ,btnClr, textClr, lineClr }) {
    const textColor = textClr || 'black';
    const lineColor = lineClr || 'black';
    console.log('colors',textColor,lineColor);
    return (
        <div>
            <BackButton color={btnClr} />
            <h1 className={`pt-24 text-3xl font-bold text-${textColor}-500 text-${textColor}`}>
               {title}
            </h1>
            <div
                className={` w-24 h-0.5 mx-auto  bg-${lineColor} bg-${lineColor}-500` }
            ></div>
        </div>
    );
}

export default Header;
