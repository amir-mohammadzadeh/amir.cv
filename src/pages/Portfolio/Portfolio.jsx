import './Portfolio.css'
import Widget from '../../components/Widget/Widget'
import PortfolioCard from '../../components/PortfolioCard/PortfolioCard'
import Data from '../../assets/Data.json'

const Portfolio = () => {

    return (
        <main dir='rtl' className="main">
            <h1 className='sticky top-0 z-10 dark:bg-slate-800 bg-gray-400'>
                نمونه کارها
            </h1>
            <div className="portfolio_container">
                {Data.portfolios.map(item =>
                    <Widget key={item.id} className='portfolio-card'>
                        <PortfolioCard {...item} />
                    </Widget>
                )}
            </div>
        </main>
    )
}

export default Portfolio