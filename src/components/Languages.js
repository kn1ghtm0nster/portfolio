import { Link } from "react-router-dom";
import "../styles/Languages.css";

const Languages = () => {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100 row mb-5">
			<div className="col-sm-4 text-center">
				<Link
					to="/contact"
					className="text-decoration-none text-warning"
				>
					<i className="bi bi-person-fill link-icon"></i>
					<p>Contact Info</p>
				</Link>
			</div>
			<div className="col-sm-4 text-center">
				<Link
					to="/projects"
					className="text-decoration-none text-warning"
				>
					<i className="bi bi-terminal-fill link-icon"></i>
					<p>Projects</p>
				</Link>
			</div>
			<div className="col-sm-4 text-center">
				<Link
					to="/education"
					className="text-decoration-none text-warning"
				>
					<i className="bi bi-mortarboard-fill link-icon"></i>
					<p>Education</p>
				</Link>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="ptyhon"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">Python</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Familiar</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="ptyhon"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">HTML</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Familiar</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="ptyhon"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">CSS</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Beginner</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="ptyhon"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">Javascript</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Advanced</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="ptyhon"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">Typescript</span>
						<br />
						Exprience:{" "}
						<span className="text-warning"> Beginner</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="ptyhon"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">Bootstrap</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Advanced</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="ptyhon"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">Bulma</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Familiar</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="ptyhon"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">Material UI</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Familiar</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="flask-pic"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg"
				/>

				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">Flask</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Familiar</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="express-pic"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
				/>

				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">Express.js</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Familiar</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="ptyhon"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">Jest</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Advanced</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="ptyhon"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">React.js</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Advanced</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="ptyhon"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">PostgreSQL</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Familiar</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="ptyhon"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">Git</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Advanced</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					alt="github-pic"
					style={{ width: "100px", height: "100px" }}
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg"
				/>

				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">GitHub</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Familiar</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="sqla-pic"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">SQL Alchemy</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Beginner</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="markdown-pic"
					id="language-pic"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/markdown/markdown-original.svg"
				/>

				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">Markdown</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Advanced</span>
					</p>
				</div>
			</div>
			<div className="col-sm-4 text-center mt-2">
				<img
					style={{ width: "100px", height: "100px" }}
					alt="vsc-pic"
					src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
				/>
				<div className=" animate__animated animate__fadeIn animate__slow">
					<p>
						<span className="text-warning">VS Code</span>
						<br />
						Exprience:{" "}
						<span className="text-warning">Familiar</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Languages;
