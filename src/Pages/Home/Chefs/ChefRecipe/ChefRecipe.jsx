import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating'
import { FaCheck } from 'react-icons/fa';

import '@smastrom/react-rating/style.css'
import Swal from 'sweetalert2';

const ChefRecipe = ({ item }) => {
    const [favorites,setFavorites]=useState(false);
    const { name, ingredients, cooking_method, image, rating } = item;
    const sweetAlert = (name) => {
        setFavorites(true)
        Swal.fire(
            `My favorite Recipe is ${name}`,
            "Good Choice",
            'success'
        )
    }
    return (

        <div>
            <div className="w-full p-4">
                <div className="h-full border shadow-lg rounded-xl overflow-hidden">
                    <img
                        className="h-64 w-full object-fill"
                        src={image} />
                    <div className="p-6">
                        <h3 className="text-lg font-medium mb-2">{name}</h3>
                        <Rating style={{ maxWidth: 100 }} value={Math.round(rating) || 0} readOnly />
                        <p className="text-gray-600 mt-2">{cooking_method.slice(0, 100)}...</p>
                        <h5 className='font-bold text-lg my-2'>Ingredients :</h5>
                        <ul className='mt-1'>
                            {
                                ingredients.map((ingredient, index) => <li key={index + 1}><FaCheck className='inline mr-2 text-green-500'></FaCheck><span>{ingredient}</span></li>)
                            }
                        </ul>
                        <button onClick={()=>{sweetAlert(name)}} disabled={favorites} className='btn btn-success mt-3 w-[50%]  text-white font-semibold'>Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;