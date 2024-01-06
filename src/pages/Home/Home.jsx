import './Home.css'
import Widget from '../../components/Widget/Widget'
import Detailes from '../../components/Detailes/Detailes'
import Aboute from '../../components/Aboute/Aboute'
import Skill from '../../components/Skill/Skill'
import Social from '../../components/Social/Social'

const Home = () => {

    return (
        <main className="main">
            <div dir='rtl' className="home-container">
                <div className="flex-grow">
                    <div className="home-header">
                        <div className="profile">
                            <img src="prof.jpg" alt="Profile Image" />
                        </div>

                        <Detailes />
                    </div>
                    <Aboute />
                </div>
                <div className="home_left-side">
                    <Skill />
                    <Widget className="home_socails">
                        <Social dispaly='grid' size='50' />
                    </Widget>
                </div>
            </div>
        </main>
    )
}

export default Home