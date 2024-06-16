import './PortfolioCard.css'
import { CaretLeft, DiscriptionIcon, SourceCodeIcon } from '../../assets/Icons'
import React, { useState } from 'react'

const PortfolioCard = ({ title, languages, discription, linke, sorscode, image }) => {
    const [currentImage, setCurrentImage] = useState(image[0])
    const [openDiscription, setOpenDiscription] = useState(false)
    const changImage = () => {
        const idx = image.indexOf(currentImage)
        idx == image.length - 1 ?
            setCurrentImage(image[0])
            : setCurrentImage(image[idx + 1])
    }
    return (
        <div className="Card_content">
            <div className="Portfolio_image">
                <img src={`./portfolios_image/${currentImage}`} loading='ert' alt="" />
                {image.length > 1 &&
                    <div className="next-img" onClick={changImage} title='تصویر بعدی'>
                        <CaretLeft />
                    </div>
                }

            </div>

            <div className="Portfolio-details">
                <h3>
                    {title}
                </h3>
                <span>
                    {languages.join(' / ')}
                </span>
            </div>
            <div className="Portfolio-Card_Buttons">
                <button className='pc-btn-1 ' onClick={() => setOpenDiscription(true)}>
                    <DiscriptionIcon size='25' className='text-gray-600 dark:text-slate-300' />
                    توضیحات
                </button>
                {linke != '' &&
                    <a className='pc-btn-2 dark:text-green-400 sm:dark:text-white' href={linke} target='_blank'>
                        نمایش
                    </a>
                }
                {sorscode != '' &&
                    <a className='pc-btn-3 dark:text-green-100' href={sorscode} target='_blank'>
                        <SourceCodeIcon size='28' />
                        <label> سورس کد </label>
                    </a>
                }
            </div>
            {openDiscription &&
                <div className="Dis_content">
                    <p className="Dis_textbox">
                        {discription}
                    </p>
                    <button className='Dis_close' onClick={() => setOpenDiscription(false)}>
                        بازگشت
                    </button>
                </div>
            }

        </div>
    )
}

export default PortfolioCard