import './Social.css'
import { EmailIcon, GithubIcon, InstagramIcon, LinkedinIcon } from '../../assets/Icons';
import { Link } from 'react-router-dom';
import Data from '../../assets/Data.json'

const Social = ({ dispaly, size }) => {
    let content;

    dispaly == 'grid' ? content = 'grid_content' : content = 'flex_content';

    return (
        <ul className={content}>
            <li>
                <a href={Data.Detailes.github} target='_blank'>
                    <GithubIcon size={size} />
                </a>
            </li>
            <li>
                <a href={Data.Detailes.linkedin} target='_blank'>
                    <LinkedinIcon size={size} />
                </a>
            </li>
            <li>
                <InstagramIcon size={size} />
            </li>
            <li>
                <Link to='/contact-me'>
                    <EmailIcon size={size} />
                </Link>
            </li>
        </ul>

    )
}

export default Social