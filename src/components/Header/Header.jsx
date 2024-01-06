import { MoonIcon, SunIcon } from '../../assets/Icons'

const Header = ({ theme, setTheme }) => {
  return (
    <header className='w-full h-16 bg-slate-600 dark:bg-slate-900 hidden md:block'>

      <div className="w-ful h-full py-4 px-8 flex items-center justify-between">
        <div
          onClick={() => setTheme(p => !p)}
          className='h-full text-gray-300 dark:text-slate-500 cursor-pointer'
        >
          {theme ? <SunIcon /> : <MoonIcon />}

        </div>

        <a
          className='py-1 px-4 rounded-lg border-2 border-yellow-400 text-white'
        >
          Download CV
        </a>

      </div>
    </header>
  )
}

export default Header