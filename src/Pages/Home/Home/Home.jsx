import React, { useEffect, useState } from 'react';
import Chefs from '../Chefs/Chefs';
import PopularRecipes from '../PopularRecipes/PopularRecipes';
import Swipe from '../Swiper/Swipe';


const Home = () => {
    const [chefs, setChefs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/chefs")
            .then(res => res.json())
            .then(data => setChefs(data));
    }, [])
    return (
        <div>
            <Swipe></Swipe>
            <div className='grid md:grid-cols-3 gap-5 my-10 w-11/12 mx-auto'>
                {
                    chefs.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
                }
            </div>
            <PopularRecipes></PopularRecipes>
            <div className="col-item col-xs-6 col-sm-6 col-md-4">
                
            
            </div>
        </div>



    );
};

export default Home;