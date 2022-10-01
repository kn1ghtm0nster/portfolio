import { Nav, NavItem, NavLink } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const SocialMediaLinks = () => {
	return (
		<div>
			<Link href="www.google.com" target="_blank">
				<i class="bi bi-instagram warning"></i>
			</Link>
		</div>
	);
};

export default SocialMediaLinks;
