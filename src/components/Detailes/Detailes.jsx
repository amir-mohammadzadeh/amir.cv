import './Detailes.css'
import Widget from '../Widget/Widget'
import Data from '../../assets/Data.json'

const Detailes = () => {
    return (
        <Widget className="order-2">
            <div className="text-center mb-8 lg:mb-4 flex items-center sm:flex-col sm:gap-4 sm:mb-6">
                <h1 className='basis-1/2 flex-grow text-4xl font-semibold 2xl:text-3xl '>
                    {Data.Detailes.name}
                </h1>
                <span className='basis-1/2 flex-grow text-xl 2xl:text-xl '>
                    {Data.Detailes.job}
                </span>
            </div>
            <div className="Detailes">
                <ul className='w-full pe-2 border-l-2 border-red-600 dark:border-yellow-400 '>
                    <li className="item">
                        <span>
                            سن:
                        </span>
                        <span>
                            {Data.Detailes.age} سال
                        </span>
                    </li>
                    <li className="item">
                        <span>
                            محل سکونت:
                        </span>
                        <span>
                            {Data.Detailes.address.ostan}
                        </span>
                    </li>
                    <li className="item">
                        <span>
                            وضعیت تأهل:
                        </span>
                        <span>
                            {Data.Detailes.marride}
                        </span>
                    </li>
                </ul>
                <ul className='w-full'>
                    <li className="item">
                        <span>
                            شماره:
                        </span>
                        <span>
                            {Data.Detailes.phoneNumber}
                        </span>
                    </li>
                    <li className="item">
                        <span>
                            ایمیل:
                        </span>
                        <span>
                            {Data.Detailes.email}
                        </span>
                    </li>
                    <li className="item">
                        <span>
                            سربازی:
                        </span>
                        <span>
                            {Data.Detailes.sarbazi}
                        </span>
                    </li>
                </ul>
            </div>
        </Widget>
    )
}

export default Detailes