import { Route } from "react-router-dom";
import Home from "../components/Home";

const Routes = () => {
	return (
		<div>
			<Route exact path="/">
				<Home />
			</Route>
			<Route exact path="/about">
				{/* RENDER ABOUT COMPONENT */}
			</Route>
			<Route exact path="/skills">
				{/* RENDER SKILLS COMPONENT */}
			</Route>
			<Route exact path="/projects">
				{/* RENDER PROJECTS COMPONENT */}
			</Route>
			<Route exact path="/contact">
				{/* RENDER CONTACT COMPONENT */}
			</Route>
		</div>
	);
};

export default Routes;
