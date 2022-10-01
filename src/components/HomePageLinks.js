import { Nav, NavItem, NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const RouteLinks = () => {
	return (
		<div>
			<Nav justified>
				<NavItem>
					<NavLink href="#" className="nav-link text-warning">
						About
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#" className="nav-link text-warning">
						Skills
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#" className="nav-link text-warning">
						Projects
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink href="#" className="nav-link text-warning">
						Contact
					</NavLink>
				</NavItem>
			</Nav>
		</div>
	);
};

export default RouteLinks;
