import React from 'react';

const AllMeal = () => {
    return (
        <>
           <h3 className='font-display text-center my-10 text-5xl font-bold'>Types Of Meal</h3>
           <div className='flex w-[90%] mx-auto justify-evenly my-20 shadow-xl p-10'>
            <div>
                <img src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/10/icon-5.png" alt="" />
                <p className='text-center font-bold mt-3 hover:text-[#c59d5f]'>Dinner</p>
            </div>
            <div>
                <img src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/10/icon-1.png" alt="" />
                <p className='text-center font-bold mt-3 hover:text-[#c59d5f]'>Lunch</p>
            </div>
            <div>
                <img src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/10/icon-3.png" alt="" />
                <p className='text-center font-bold mt-3 hover:text-[#c59d5f]'>Brunch</p>
            </div>
            <div>
                <img src="https://demo.zozothemes.com/palmplaza/wp-content/uploads/sites/41/2019/10/icon-4.png" alt="" />
                <p className='text-center font-bold mt-3 hover:text-[#c59d5f]'>Desert</p>
            </div>
            
        </div> 
        </>
    );
};

export default AllMeal;