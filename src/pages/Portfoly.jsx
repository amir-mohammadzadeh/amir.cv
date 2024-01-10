import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import './portfoly.css'
import PCard from '../components/PortfolioCard/PCard';


const Portfoly = () => {
    const p = ['/amir.cv/8.png','/amir.cv/25.png','/amir.cv/56.png','/amir.cv/1234.png','/amir.cv/25.png','/amir.cv/1234.png','/amir.cv/8.png','/amir.cv/56.png']
    let d = []
    for (let i = 0; i <= 10; i++) {
        d.push("item-" + i)
    };

    return (
        <>
            <div className="M_container">
            <h1 className='self-center'>
                نمونه کارها
            </h1>
            <div className="test">

                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards,Navigation]}
                    className="mySwiper"
                    navigation={
                        {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                            clickable:true
                        }
                    }
                >
                    {p.map((n,i) => <SwiperSlide key={i}>
                        <PCard n={n}/>

                    </SwiperSlide>)}
                    <div className="slider-controler md:hidden">
                        <div className="swiper-button-prev dark:text-yellow-300">
                        </div>
                        <div className="swiper-button-next dark:text-yellow-300 ">
                        </div>
                    </div>
                </Swiper>
            </div>


            </div>


        </>
    )
}

export default Portfoly

/**
 <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
        navigation={
            {nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',}
          }
      >
        {d.map(i => <SwiperSlide>
            <div className="C_content">
                        <div className="img-cont">
                            <img src="amir.cv/public/1234.png" alt="" />
                        </div>
                        <div className="body">
                            <h3>
                                عنوان
                            </h3>
                            <span>
                                HTML \ Css / JS
                            </span>
                        </div>
                        <div className="Foot">
                            <a href="">
                                نمایش
                            </a>
                            <a href="">
                                سورس کد
                            </a>
                        </div>
                    </div>
        
        </SwiperSlide>)}
 </Swiper>

 */