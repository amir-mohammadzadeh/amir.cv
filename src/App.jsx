import './App.css'
import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router'
import { router } from './router'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Widget from './components/Widget/Widget'

function App() {
  const routes = useRoutes(router)
  const [count, setCount] = useState(0)
  const [darkThem, setDarkThem] = useState(true)
  let d =[]
  for(let i=0 ; i<=50 ; i++){
    d.push("item-"+ i )
  }; 
  useEffect(() => {
    darkThem ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark')
  }, [darkThem])

  return (
    <>
      <div dir='rtl' className="h-screen w-screen py-8 px-6 flex gap-4 lg:flex-col-reverse lg:p-0 lg:pt-4">
        <Navigation theme={darkThem} setTheme={setDarkThem}  />
        <main className="main"> 
          {/*routes*/}
          <div className="H_container">
            <div className="I_content">
              <img src="prof.jpg" alt="Profile Image" />
            </div>
            <Widget className="D_content">
              Detailes
            </Widget>
            <Widget className="S_content">
              Skills
            </Widget>
            <Widget className="A_content">
              About me
            </Widget>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
/**
 <ul>
            {d.map(i => <li>{i}</li>)}
          </ul>

 */