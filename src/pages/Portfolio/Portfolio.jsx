import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import './Portfolio.css'
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard';
import Data from '../../assets/Data.json'

const Portfolio = () => {
    return (
        <>
            <div className="M_container">
                <h1 className='self-center lg:mt-10'>
                    نمونه کارها
                </h1>
                <div className="Swiper_Container">

                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards, Navigation]}
                        className="mySwiper"
                        navigation={
                            {
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true
                            }
                        }
                    >
                        {Data.portfolios.map(item => <SwiperSlide key={item.id}>    <PortfolioCard {...item} />    </SwiperSlide>)}
                        
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

export default Portfolio