import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Records from "./pages/Records/Records";
import Portfoly from "./pages/portfoly";

export const router = [
    { path: '/', element: <Home  /> },
    { path: '/education', element: <Records /> },
    { path: '/portfolio', element: <Portfolio /> },
    { path: '/portfolios', element: <Portfoly /> },
    { path: '/contact-me', element: <Contact /> },

]