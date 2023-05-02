import React, { useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";


// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const Swipe = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <div>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                loop={true}
                spaceBetween={10}
                navigation={true}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs]}
                className="mySwiper2"
            >
                <SwiperSlide>

                <div className='flex justify-center items-center bg-blend-multiply bg-slate-500'  style={{
                        backgroundImage: "url(https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/baked-chicken-breast-9C4F43W-1200x600.jpg)",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '400px',
                    }}>
                        <div className='text-center'>
                            <p className='text-4xl font-bold text-white'>Baked Chicken Breast</p>
                            <p className="text-white mt-2">A handful of simple ingredients typify the fresh, <br /> vibrant flavors of Greek cooking.</p>
                        </div>
                    </div>
                   

                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-center items-center bg-blend-multiply bg-slate-500' style={{
                        backgroundImage: "url(https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/homemade-chicken-tikka-masala-AW6RTJ7-1200x600.jpg)",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '400px',
                    }}>
                       <div className='text-center'>
                            <p className='text-4xl font-bold text-white'>Chicken Tikka Masala</p>
                            <p className="text-white mt-2">A handful of simple ingredients typify the fresh, <br /> vibrant flavors of Greek cooking.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className='flex justify-center items-center bg-blend-multiply bg-slate-500' style={{
                        backgroundImage: "url(https://149410494.v2.pressablecdn.com/wp-content/uploads/2020/03/beef-steak-tomahawk-S3JHQLN-700x525.jpg)",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        height: '400px',
                    }}>
                       <div className='text-center'>
                            <p className='text-4xl font-bold text-white'>Tomahawk Steak</p>
                            <p className="text-white mt-2">A handful of simple ingredients typify the fresh, <br /> vibrant flavors of Greek cooking.</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Swipe;