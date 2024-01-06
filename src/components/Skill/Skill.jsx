//import './Skill.css'
import Widget from '../Widget/Widget'
import Data from '../../assets/Data.json'

const Skill = () => {
    //const items_class = 'flex justify-between flex-row-reverse items-center text-xl leading-9 duration-300 hover:bg-gray-300 dark:hover:bg-slate-600'
    return (
        <Widget className="w-full">
            <h3 className='text-center text-2xl font-semibold'>
                مهارت ها
            </h3>
            <div className="py-4">
                <ul>
                    {Data.skills.map(skill =>
                        <li key={skill.id} className="flex justify-between flex-row-reverse items-center text-xl leading-9 duration-300 hover:bg-gray-300 dark:hover:bg-slate-600">
                            <span>
                                {skill.skill}
                            </span>
                            <span className='dark:text-slate-400 text-gray-700 text-base'>
                                {skill.value}
                            </span>
                        </li>
                    )}
                </ul>
            </div>
        </Widget>
    )
}

export default Skill
/*
                    <li className={items_class}>
                        <span>
                            JavaScript
                        </span>
                        <span className='dark:text-slate-400 text-gray-700 text-base'>
                            خوب
                        </span>
                    </li>
                    <li className={items_class}>
                        <span>
                            React
                        </span>
                        <span className='dark:text-slate-400 text-gray-700 text-base'>
                            متوسط
                        </span>
                    </li>
                    <li className={items_class}>
                        <span>
                            TypeScript
                        </span>
                        <span className='dark:text-slate-400 text-gray-700 text-base'>
                            مبتدی
                        </span>
                    </li>
                    <li className={items_class}>
                        <span>
                        Tailwind
                        </span>
                        <span className='dark:text-slate-400 text-gray-700 text-base'>
                            متوسط
                        </span>
                    </li>
                    <li className={items_class}>
                        <span>
                            Bootstrap
                        </span>
                        <span className='dark:text-slate-400 text-gray-700 text-base'>
                            متوسط
                        </span>
                    </li>
                    <li className={items_class}>
                        <span>
                            Python
                        </span>
                        <span className='dark:text-slate-400 text-gray-700 text-base'>
                            خوب
                        </span>
                    </li>
*/