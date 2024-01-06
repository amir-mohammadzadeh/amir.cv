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