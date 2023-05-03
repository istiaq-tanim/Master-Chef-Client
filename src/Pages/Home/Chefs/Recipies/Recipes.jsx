import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';
import ChefRecipe from '../ChefRecipe/ChefRecipe';

const Recipes = () => {
    const chef = useLoaderData();
    console.log(chef);
    const { id, name, profile_picture, experience, num_recipes, likes, recipes, bio } = chef
    return (
        <div>
            <div className="card lg:card-side flex justify-center items-center bg-base-100">
                <figure className='w-72 pl-10'><img className='rounded' src={profile_picture} alt="Album" /></figure>
                <div className="card-body pt-10">
                    <h2 className="card-title">{name}</h2>
                    <p className='w-[65%] text-justify'>{bio}</p>
                    <p className="text-gray-700 text-base mb-1 font-semibold flex items-center "><FaThumbsUp className='mr-2 text-green-500'></FaThumbsUp><span>{likes}</span></p>
                    <p className="text-gray-700 text-base mb-1 font-semibold">Years of experience: {experience} years</p>
                    <p className="text-gray-700 text-base mb-1 font-semibold">Number of Recipes: {num_recipes}</p>
                </div>
            </div>
            <div className='flex mt-20'>
                {
                    recipes.map((item,index) => <ChefRecipe key={index+1} item={item}></ChefRecipe>)
                }
            </div>

        </div>
    );
};

export default Recipes;