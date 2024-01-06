import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Records from "./pages/Records/Records";

export const router = [
    { path: '/amir.cv/', element: <Home  /> },
    { path: '/amir.cv/education', element: <Records /> },
    { path: '/amir.cv/portfolios', element: <Portfolio /> },
    { path: '/amir.cv/contact-me', element: <Contact /> },

]