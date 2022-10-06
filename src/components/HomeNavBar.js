import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";

const HomeNavBar = () => {
	return (
		<div>
			<hr className="text-warning my-2 animate__animated animate__fadeIn animate__faster animate__delay-5s"></hr>
			<Nav justified>
				<NavItem className="my-1">
					<Link
						to="/about"
						className="fs-3 text-warning text-decoration-none home-link animate__animated animate__fadeIn animate__faster animate__delay-1s"
					>
						About
					</Link>
				</NavItem>
				<NavItem className="my-1">
					<Link
						to="/contact"
						className="fs-3 text-warning text-decoration-none home-link animate__animated animate__fadeIn animate__faster animate__delay-2s"
					>
						Contact
					</Link>
				</NavItem>
				<NavItem className="my-1">
					<Link
						to="/skills"
						className="fs-3 text-warning text-decoration-none home-link animate__animated animate__fadeIn animate__faster animate__delay-3s"
					>
						Skills
					</Link>
				</NavItem>
				<NavItem className="my-1">
					<Link
						to="/projects"
						className="fs-3 text-warning text-decoration-none home-link animate__animated animate__fadeIn animate__faster animate__delay-4s"
					>
						Projects
					</Link>
				</NavItem>
				<NavItem className="my-1">
					<Link
						to="/education"
						className="fs-3 text-warning text-decoration-none home-link animate__animated animate__fadeIn animate__faster animate__delay-5s"
					>
						Education
					</Link>
				</NavItem>
			</Nav>
			<hr className="text-warning my-2 animate__animated animate__fadeIn animate__faster animate__delay-5s"></hr>
		</div>
	);
};

export default HomeNavBar;
