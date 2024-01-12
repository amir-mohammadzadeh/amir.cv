import { useEffect, useState } from 'react'
import { useRoutes } from 'react-router'
import { router } from './router'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'

function App() {
    const routes = useRoutes(router)
    const [darkThem, setDarkThem] = useState(true)
    useEffect(() => {
        darkThem ? document.documentElement.classList.add('dark')
            : document.documentElement.classList.remove('dark')
    }, [darkThem])

    return (
        <>
            <div dir='rtl' className="w-full h-full py-8 px-6 flex gap-4 lg:flex-col-reverse lg:p-0 lg:pt-4 sm:pt-0">
                <Navigation theme={darkThem} setTheme={setDarkThem} />
                <main className="main">
                    {routes}
                </main>
                <Header theme={darkThem} setTheme={setDarkThem} />
            </div>
        </>
    )
}

export default App