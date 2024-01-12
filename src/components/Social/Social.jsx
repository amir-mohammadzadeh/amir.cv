import { GithubIcon, InstagramIcon, LinkedinIcon } from '../../assets/Icons';
import Data from '../../assets/Data.json'

const Social = ({ iconSize }) => {
    let li_class = 'text-center cursor-pointer duration-300 dark:text-slate-400 text-gray-600 hover:text-blue-600 hover:dark:text-yellow-300';

    return (
        <ul className='flex justify-center gap-8'>
            <li className={li_class}>
                <a href={Data.Detailes.github} target='_blank'>
                    <GithubIcon size={iconSize} />
                </a>
            </li>
            <li className={li_class}>
                <a href={Data.Detailes.linkedin} target='_blank'>
                    <LinkedinIcon size={iconSize} />
                </a>
            </li>
            <li className={li_class}>
                <a href="https://instagram.com/mr.code_98?utm_medium=copy_link" target='_blank'>
                    <InstagramIcon size={iconSize} />
                </a>
            </li>

        </ul>

    )
}

export default Social