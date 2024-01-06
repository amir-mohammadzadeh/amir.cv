import './App.css'
import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router'
import { router } from './router'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'

function App() {
  const routes = useRoutes(router)
  const [count, setCount] = useState(0)
  const [darkThem, setDarkThem] = useState(true)

  useEffect(() => {
    darkThem ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [darkThem])

  return (
    <>
      <Header  theme={darkThem} setTheme={setDarkThem} />
      <div className="flex lg:flex-col-reverse flex-row-reverse justify-end h-screen py-12 md:pt-5 md:pb-28 overflow-x-hidden">
        <Navigation theme={darkThem} setTheme={setDarkThem} />
        {routes}
      </div>
    </>
  )
}

export default App
