import "../styles/Skills.css";
import Languages from "./Languages";

const Skills = () => {
	document.title = "Skills";
	return (
		<div>
			<h1 className="display-1 text-center my-4">
				Technical <span className="text-warning">Skills</span>
			</h1>
			<Languages />
		</div>
	);
};

export default Skills;
