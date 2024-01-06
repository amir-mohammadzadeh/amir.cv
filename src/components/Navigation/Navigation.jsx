import './Navigation.css'
import { HomeIcon, EducationIcon, FilesInterfaceIcon, ContactMe, SunIcon, DownloadIcon, MoonIcon } from '../../assets/Icons';
import { NavLink } from 'react-router-dom';

const Navigation = ({ theme, setTheme }) => {

  const activeLinkHandle = (link) => {
    return link.isActive ? 'navbar-icon link-active' : 'navbar-icon'
  }

  return (
    <nav className="navbar ">
      <div className="navbar-container">
        <div className="nav-1">
          <NavLink to='/amir.cv/' className={link => activeLinkHandle(link)} >
            <HomeIcon />
            <span className="link-label">
              صفحه اصلی
            </span>
          </NavLink>
          <NavLink to='/amir.cv/education' className={link => activeLinkHandle(link)}  >
            <EducationIcon />
            <div className="link-label">
              سوابق تحصیلی
            </div>
          </NavLink>
          <NavLink to='/amir.cv/portfolios' className={link => activeLinkHandle(link)}  >
            <FilesInterfaceIcon />
            <span className="link-label">
              نمونه کارها
            </span>
          </NavLink>
          <NavLink to='/amir.cv/contact-me' className={link => activeLinkHandle(link)}  >
            <ContactMe />
            <span className="link-label">
              تماس بامن
            </span>
          </NavLink>
        </div>
        <div className="nav-2">
          <NavLink className='navbar-icon'  >
            <DownloadIcon />
            <span className="link-label">
              دانلود رزومه
            </span>
          </NavLink>
          <div onClick={() => setTheme(p => !p)} className='navbar-icon'  >
            {theme ? <SunIcon /> : <MoonIcon />}

          </div>
        </div>

      </div>
    </nav>
  )
}

export default Navigation
/**
 * <FaClipboardList />
 * <FaMapMarkedAlt />   <FaMapMarkerAlt />
 * <FaUserTie />
 * <FaMoon />
 * <FaPaperPlane />
 * <FaPhone />   <FaPhoneAlt />
 * <FaMailBulk />
 * <FaGithub />
 * <FaBattleNet />
 */

/* 



*/