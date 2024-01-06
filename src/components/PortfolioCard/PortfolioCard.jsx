import {  useState } from 'react'
import './PortfolioCard.css'

const PortfolioCard = ({ title, languages, discription, linke, sorscode }) => {
    const [readMore, setReadMore] = useState(false)

    return (
        <>
            <h3 className='text-2xl font-semibold sm:text-xl'>
                {title}
            </h3>
            <div className="my-4 font-medium text-red-800 dark:text-yellow-500">
                {languages.join(' / ')}
            </div>

            <p className='Description-1'>
                {discription.length >= 100 ?
                    <>
                        {discription.substring(0, 100)}
                        <span onClick={() => setReadMore(p => !p)}>
                            Read More
                        </span>
                    </>
                    : discription
                }
            </p>
            {readMore &&
                <div className="Description-2">
                    <p>
                        {discription}
                    </p>
                    <span onClick={() => setReadMore(p => !p)}>
                        Back
                    </span>
                </div>
            }

            <div className="flex-grow flex justify-between items-end sm:mt-2">
                <a
                    href={linke} target='_blank'
                    className='text-xl duration-300 text-blue-600 hover:text-blue-800 dark:text-green-500 dark:hover:text-green-300'>
                    نمایش
                </a>
                <a
                    href={sorscode} target='_blank'
                    className='text-xl duration-300  text-sky-600 hover:text-sky-800 dark:text-slate-300 dark:hover:text-green-200'>
                    سورس کد
                </a>
            </div>
        </>
    )
}

export default PortfolioCard