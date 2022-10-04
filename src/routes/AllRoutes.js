import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Education from "../components/Education";

const AllRoutes = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
				<Route path="/contact" element={<Contact />}></Route>
				<Route path="/skills" element={<Skills />}></Route>
				<Route path="/projects" element={<Projects />}></Route>
				<Route path="/education" element={<Education />}></Route>
			</Routes>
		</div>
	);
};

export default AllRoutes;
