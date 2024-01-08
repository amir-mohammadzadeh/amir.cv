import Widget from '../Widget/Widget'
import Data from '../../assets/Data.json'
import { UserIcon } from '../../assets/Icons'

const Aboute = () => {
    return (
        <Widget className='order-4 col-span-2 xl:order-3 md:col-auto'>
            <h3 className='text-2xl font-semibold flex gap-2 items-center'>
                <UserIcon className='w-7 h-7 dark:text-gray-300' />
                درباره من
            </h3>
            <p className='leading-8 text-base lg:text-lg lg:leading-9 px-3 py-4 dark:text-slate-200'>
                {Data.aboutMe}
            </p>
        </Widget>
    )
}

export default Aboute