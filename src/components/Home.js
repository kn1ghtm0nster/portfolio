import HomePageLinks from "./HomePageLinks";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

const Home = () => {
	return (
		<div>
			<h1 className="display-1 mb-3 animate__animated animate__fadeIn animate__slower">
				Diego <span className="main-font-color">Quintanilla</span>
			</h1>
			<h3 className="display-4 mb-3 animate__animated animate__fadeIn animate__slower animate__delay-2s">
				<span className="main-font-color">Software</span> Engineer
			</h3>

			<hr className="text-warning my-2"></hr>
			<HomePageLinks />
			<hr className="text-warning my-2"></hr>
		</div>
	);
};

export default Home;
