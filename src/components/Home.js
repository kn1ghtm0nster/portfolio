import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
// import headshot from "../images/portfolio_headshot.jpg";
import HomeNavBar from "../components/HomeNavBar";

const Home = () => {
	return (
		<div className="d-flex align-items-center justify-content-center vh-100 ">
			<div className="row">
				<div className="col">
					<h1 className="text-center display-1 mb-3 animate__animated animate__fadeIn animate__slower animate__delay-5s">
						Diego{" "}
						<span className="main-font-color">Quintanilla</span>
					</h1>
					<h3 className="text-center display-4 mb-3 animate__animated animate__fadeIn animate__slower animate__delay-5s">
						<span className="main-font-color">Software</span>{" "}
						Engineer
					</h3>
				</div>
				<HomeNavBar />
			</div>
		</div>
	);
};

export default Home;
