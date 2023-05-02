import moment from 'moment/moment';
import React from 'react';

const PopularRecipes = () => {
    return (
        <div className='md:flex flex-col gap-5 md:w-3/4 md:mx-auto my-10'>
            <h3 className='text-center text-3xl font-display my-8'>Trending Recipe</h3>
            <div className='md:flex gap-10 font-display'>
                <img className="md:w-96 w-72 h-fit rounded mx-auto" src="https://img.freepik.com/free-photo/curry-with-chicken-onions-indian-food-asian-cuisine_2829-4415.jpg?w=900&t=st=1683002614~exp=1683003214~hmac=17590d3489b65f5c0a602ee7d13afc009a586b0333087b76628c10719a28f44d" alt="Card image" />

                <div className='mt-5 font-display p-2 text-center md:text-left'>
                    <h3 className='font-bold text-3xl'>Butter Chicken</h3>
                    <p className='mt-3 text-xs text-zinc-600'>{moment().format("dddd,MMMM Do YYYY")}</p>
                    <p className='mt-5 text-gray-500 text-justify text-lg'>Marinate chicken in a mixture of yogurt,ginger-garlic paste and spices.Sauté onion in butter, then add tomato puree and spices.Add chicken and cook until tender.Serve with rice or naan.</p>
                </div>
            </div>
            <div className='md:flex gap-10 font-display'>
                <img className="md:w-96 w-72 rounded mx-auto" src="https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=996&t=st=1683004817~exp=1683005417~hmac=39145c4a32f7eb6b171794b16637af60f3c5878a0c47e4e47b91b21f67a197ae" alt="Card image" />

                <div className='mt-5 font-display p-2 text-center md:text-left'>
                    <h3 className='font-bold text-3xl '>Chana Masala</h3>
                    <p className='mt-3 text-xs text-zinc-600'>{moment().format("dddd,MMMM Do YYYY")}</p>
                    <p className='mt-5 text-gray-500 text-justify text-lg'>Sauté onion and ginger-garlic paste.Add tomatoes and spices.Add chickpeas and cook until heated through.Garnish with fresh coriander leaves.Serve with rice or naan.</p>
                </div>
            </div>
            <div className='md:flex gap-10'>
                <img className="md:w-96 w-72 rounded mx-auto" src="https://img.freepik.com/free-photo/side-view-chicken-kebab-with-grilled-hot-green-pepper-tomato-pickled-cabbage-rice-pita_141793-4837.jpg?w=996&t=st=1683005627~exp=1683006227~hmac=be01231ca37b83349b5798ec1bb83539649ad81ded7ebac1577136654df01f60" alt="Card image" />

                <div className='mt-5 font-display p-2 text-center md:text-left'>
                    <h3 className='font-bold text-3xl'>Chicken Tikka Masala</h3>
                    <p className='mt-3 text-xs text-zinc-600'>{moment().format("dddd,MMMM Do YYYY")}</p>
                    <p className='mt-5 text-gray-500 text-justify  text-lg'>Marinate chicken in a mixture of yogurt, ginger-garlic paste, and spices.Skewer and grill until charred.Sauté onion and spices.Add tomato puree and cook until thickened.Add cream and chicken, and cook until heated through.Serve with rice or naan.</p>
                </div>
            </div>
            <div className='md:flex gap-10 font-display'>
                <img className="md:w-96 w-72 rounded mx-auto" src="https://img.freepik.com/premium-photo/mumbai-style-pav-bhaji-is-fast-food-dish-from-india-consists-thick-vegetable-curry-served-with-soft-bread-roll-served-plate_466689-2267.jpg?w=996" />

                <div className='text-center p-2 md:text-left'>
                    <h3 className='font-bold text-3xl'>Pav Bhaji</h3>
                    <p className='mt-3 text-xs text-zinc-600'>{moment().format("dddd,MMMM Do YYYY")}</p>
                    <p className='mt-5 text-gray-500 text-justify text-lg'>Boil and mash vegetables.Sauté spices in butter.Add vegetables and cook until heated through.Serve with toasted pav buns,lemon wedges, and chopped onion.</p>
                </div>
            </div>
        </div>
    );
};

export default PopularRecipes;