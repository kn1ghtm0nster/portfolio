import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, NavItem, NavLink } from "reactstrap";

const HomeNavBar = () => {
	return (
		<div>
			<hr className="text-warning my-2"></hr>
			<Nav justified>
				<NavItem>
					<NavLink href="/about" className="text-warning home-link">
						About
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/contact" className="text-warning home-link">
						Contact
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="/skills" className="text-warning home-link">
						Skills
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink
						href="/projects"
						className="text-warning home-link"
					>
						Projects
					</NavLink>
				</NavItem>
			</Nav>
			<hr className="text-warning my-2"></hr>
		</div>
	);
};

export default HomeNavBar;
