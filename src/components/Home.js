import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import HomeNavBar from "../components/HomeNavBar";

const Home = () => {
	return (
		<div className="home-page-styles">
			<h1 className="display-1 mb-3 animate__animated animate__fadeIn animate__slower animate__delay-5s">
				Diego <span className="main-font-color">Quintanilla</span>
			</h1>
			<h3 className="display-4 mb-3 animate__animated animate__fadeIn animate__slower animate__delay-5s">
				<span className="main-font-color">Software</span> Engineer
			</h3>
			<HomeNavBar />
		</div>
	);
};

export default Home;
