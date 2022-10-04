import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavItem, NavLink } from "reactstrap";

const HomeNavBar = () => {
	return (
		<div>
			<hr className="text-warning my-2 animate__animated animate__fadeIn animate__delay-5s"></hr>
			<Nav justified>
				<NavItem>
					<NavLink
						href="/about"
						className="text-warning home-link animate__animated animate__fadeIn animate animate__delay-1s"
					>
						About
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						href="/contact"
						className="text-warning home-link animate__animated animate__fadeIn animate__delay-2s"
					>
						Contact
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						href="/skills"
						className="text-warning home-link animate__animated animate__fadeIn animate__delay-3s"
					>
						Skills
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						href="/projects"
						className="text-warning home-link animate__animated animate__fadeIn animate__delay-4s"
					>
						Projects
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						href="/education"
						className="text-warning home-link animate__animated animate__fadeIn animate__delay-5s"
					>
						Education
					</NavLink>
				</NavItem>
			</Nav>
			<hr className="text-warning my-2 animate__animated animate__fadeIn animate__delay-5s"></hr>
		</div>
	);
};

export default HomeNavBar;
