import React from 'react';
import BackButton from '../../components/BackButton';
import Header from '../../components/Header';
import MenuItem from './MenuItem';
import menu from './foodData';
import { useState } from 'react';

function Menu() {
    const [foodMenu, setFoodMenu] = useState(menu);
    const key = 'category';
    const tabs = [...new Map(menu.map((item) => [item[key], item])).values()];
    const filterMenu = (category) => {
        const filteredMenu = menu.filter((item) => item.category === category);
        setFoodMenu(filteredMenu);
    };
    return (
        <div>
            <Header
                title='Food Menu'
                textClr='yellow'
                lineClr='yellow'
                btnClr='yellow'
            />
            <div className='mx-auto  flex justify-center gap-6 my-4'>
                <p
                    onClick={() => setFoodMenu(menu)}
                    className='cursor-pointer text-gray-500 border-2 border-yellow-200 rounded-md px-4 py-2'
                >
                    All
                </p>
                {tabs.map((item, i) => {
                    return (
                        <p
                            key={i}
                            onClick={() => filterMenu(item.category)}
                            className='cursor-pointer text-gray-500 border-2 border-yellow-200 rounded-md px-4 py-2'
                        >
                            {item.category}
                        </p>
                    );
                })}
            </div>
            <div className='grid grid-cols-3 place-items-center gap-10 max-w-6xl mx-auto mt-10 items-stretch'>
                {foodMenu.map((item) => {
                    return <MenuItem {...item} />;
                })}
            </div>
        </div>
    );
}

export default Menu;
