import Widget from '../Widget/Widget'
import Data from '../../assets/Data.json'

const Aboute = () => {
    return (
        <Widget>
            <h3 className='text-2xl font-semibold'>
                درباره من
            </h3>
            <p className='leading-8 text-base lg:text-lg lg:leading-9 px-3 py-4 dark:text-slate-200'>
                {Data.aboutMe}
            </p>
        </Widget>
    )
}

export default Aboute