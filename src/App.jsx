import { useEffect } from 'react'
import { useRoutes } from 'react-router'
import { router } from './router'
import Navigation from './components/Navigation/Navigation'

function App() {
    const routes = useRoutes(router)
    useEffect(() => {
        document.documentElement.classList.add('dark')
    },[])

    return (
        <>
            <div dir='rtl' className="w-full h-full py-8 px-6 flex gap-4 lg:flex-col-reverse lg:p-0 lg:pt-4">
                <Navigation />
                <main className="main">
                    {routes}
                </main>
            </div>
        </>
    )
}

export default App