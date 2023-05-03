import Chefs from '../Chefs/Chefs';
import PopularRecipes from '../PopularRecipes/PopularRecipes';
import Swipe from '../Swiper/Swipe';
import Loader from '../../Shared/Loader/Loader';
import { useLoaderData, useNavigation } from 'react-router-dom';
import AllMeal from '../AllMeal/AllMeal';

const Home = () => {    
    const loader=useNavigation();
    if(loader.state === 'loading')
    {
        return <Loader></Loader>
    }
    
   const chefs=useLoaderData()
    return (
        <div>
            <Swipe></Swipe>
            <AllMeal></AllMeal>
            <h3 className='font-display text-center my-10 text-5xl font-bold text-green-400'>Specialized Chefs</h3>
            <div className='grid md:grid-cols-3 gap-5 my-20 w-11/12 mx-auto'>
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