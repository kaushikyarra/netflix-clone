import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Row from '../components/Row';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="app-container">
            <Navbar />
            <div className="content-wrap">
                <Banner />
                <Row title="Trending Now" fetchUrl="/movies/trending" isLargeRow />
                <Row title="Top Rated" fetchUrl="/movies/top-rated" />
                <Row title="Upcoming" fetchUrl="/movies/upcoming" />
            </div>
            <Footer />
        </div>
    );
};

export default Home;
