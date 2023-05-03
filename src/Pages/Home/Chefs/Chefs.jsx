import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Chefs = ({ chef }) => {
    const { id, name, profile_picture,experience, num_recipes,likes } = chef
    return (
        <div >
            <div className="max-w-md rounded overflow-hidden shadow-lg bg-white">
                <img className="w-full h-[360px] object-cover rounded" src={profile_picture} alt="Card image" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Name: {name}</div>
                    <p className="text-gray-700 text-base mb-2 font-semibold">Years of experience: {experience} years</p>
                    <p className="text-gray-700 text-base mb-2 font-semibold">Number of Recipes: {num_recipes}</p>
                    <p className="text-gray-700 text-base mb-2 font-semibold flex items-center "><FaThumbsUp className='mr-2 text-green-500'></FaThumbsUp><span>{likes}</span></p>

                    <Link to={`/${id}`}><button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 mt-1 px-4 rounded">View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chefs;