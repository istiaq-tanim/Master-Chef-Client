import React, { useEffect, useState } from 'react';
import Chefs from '../Chefs/Chefs';


const Home = () => {
    const [chefs,setChefs]=useState([]);
    useEffect(()=>{
      fetch("http://localhost:5000/chefs")
      .then(res => res.json())
      .then(data => setChefs(data));
    },[])
    return (
        <div className='grid md:grid-cols-3 gap-5 my-10 w-11/12 mx-auto'>
            {
                chefs.map(chef => <Chefs key={chef.id} chef={chef}></Chefs>)
            }
        </div>
    );
};

export default Home;