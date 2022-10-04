import { useState } from "react";
import "../styles/Education.css";

import {
	Accordion,
	AccordionBody,
	AccordionHeader,
	AccordionItem,
	ListGroup,
	ListGroupItem,
} from "reactstrap";

const Education = () => {
	const skills = [
		"DataStructures & Algorithms",
		"Frontend-Development",
		"HTML5",
		"CSS",
		"Javascript",
		"Object Oriented Programming (OOP)",
		"jQuery",
		"Git",
		"GitHub",
		"Bootstrap",
		"Python3",
		"SQL",
		"Flask",
		"PostgreSQL",
		"SQLAlchemy",
		"Heroku",
		"Node.js",
		"Express.js",
		"React.js",
	];

	const pythonSkills = [
		"Understanding Python Syntax",
		"Python Data Structures",
		"Writing Python functions",
		"Introduction to Lambda functions",
		"API requests with Python",
		"Error handling and debugging",
		"Object Oriented Programming (OOP) with Python",
		"Custom Python Modules",
		"Testing and Test Driven Development (TDD) with Python",
		"Use Python to read and write files",
	];

	const webDevSkills = [
		"Understand and use Base HTML/CSS syntax",
		"Creating static HTML and CSS portfolio sites",
		"Implementing HTML form validation",
		"Learned to use CSS Frameworks such as Bootstrap 5 and Bulma",
		"Understanding Vanilla Javascript Syntax",
		"Learned to write JavaScript functions along with understanding scoping",
		"Mastering complex Javascript Syntax",
		"Learned to use Google for complex topics",
		"Understanding Object Oriented Programming (OOP) with Javascript",
		"DOM Manipulation with vanilla Javascript",
		"Introduction to the HTTP Request/Response cycle",
		"Created static pages to make AJAX requests",
		"Use Postman to make API calls",
		"Learned to use Node.js for server-side development",
		"Introduction to Express.js and MongoDB",
		"Introduced to NPM modules and how to use them",
		"Created custom modules",
		"Created full-stack application from scratch",
		"Learned to recognize common security vulnerabilities like SQL-Injection and XSS",
		"Implemented user authentication and authorization",
	];

	const books = [
		"Cracking the Coding Interview",
		"Python Crash Course - 8th Edition",
		"Eloquent JavaScript",
		"Elements of Progamming Interviews in Python",
	];

	const [open, setOpen] = useState("");

	const toggle = (id) => {
		if (open === id) {
			setOpen();
		} else {
			setOpen(id);
		}
	};
	return (
		<div className="my-5">
			{/* use span for possible home link */}
			<h1 className="text-center display-3">
				Relevant <span className="text-warning">Education</span>
			</h1>

			<section className="mt-3">
				<div className="mx-3">
					<h2 className="education-title text-warning">
						Springboard
					</h2>
					<h6 className="education-date">Dec. 2021 - Current</h6>
				</div>
				<div>
					<Accordion
						flush
						open={open}
						toggle={toggle}
						className="mx-3"
					>
						<AccordionItem>
							<AccordionHeader targetId="1">
								Overview
							</AccordionHeader>
							<AccordionBody accordionId="1" className="overview">
								700+ hours of hands-on course material, with 1:1
								industry expert mentor oversight, and completion
								of 4 in-depth portfolio projects. Mastered
								skills in front-end web development, back-end
								web development, databases, and data structures
								and algorithms.
							</AccordionBody>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader targetId="2">
								Skills Gained
							</AccordionHeader>
							<AccordionBody accordionId="2" className="skills">
								<ListGroup flush>
									{skills.map((skill) => (
										<ListGroupItem key={skill}>
											{skill}
										</ListGroupItem>
									))}
								</ListGroup>
							</AccordionBody>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader targetId="3">
								Projects
							</AccordionHeader>
							<AccordionBody accordionId="3" className="projects">
								<ListGroup flush>
									<ListGroupItem key={"Poke-Forum"}>
										Poke-Forum
									</ListGroupItem>
									<ListGroupItem key={"Connect-4"}>
										Connect-4
									</ListGroupItem>
									<ListGroupItem key={"Giphy Party"}>
										Giphy Party
									</ListGroupItem>
								</ListGroup>
							</AccordionBody>
						</AccordionItem>
					</Accordion>
				</div>
			</section>

			<section className="mt-3">
				<div className="mx-3">
					<h2 className="education-title text-warning">
						The Web Developer Bootcamp 2021 - Udemy
					</h2>
					<h6 className="education-date">
						Jan. 2021 - November 2021
					</h6>
				</div>

				<div>
					<Accordion
						flush
						open={open}
						toggle={toggle}
						className="mx-3"
					>
						<AccordionItem>
							<AccordionHeader targetId="6">
								Overview
							</AccordionHeader>
							<AccordionBody accordionId="6" className="overview">
								65 hours in depth Web Development learning
								starting with the basic HTML syntax and ending
								with a full-stack application that contains user
								authentication and authorization. Up to date
								Javascript sytnax (ES6, ES2018 and forward) from
								basic data types and structures to understanding
								Object Oriented Programming with Javascript.
								Deep understanding of the HTTP request/response
								cycle and how to make calls to external
								services. Introduction to modern technologies
								such as Node.js, Express.js, and MongoDB as well
								as learning how to use each technology
								individually.
							</AccordionBody>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader targetId="7">
								Skills Gained
							</AccordionHeader>
							<AccordionBody accordionId="7" className="skills">
								<ListGroup flush>
									{webDevSkills.map((skill) => (
										<ListGroupItem key={skill}>
											{skill}
										</ListGroupItem>
									))}
								</ListGroup>
							</AccordionBody>
						</AccordionItem>
					</Accordion>
				</div>
			</section>

			<section className="mt-3">
				<div className="mx-3">
					<h2 className="education-title text-warning">
						The Modern Python 3 Bootcamp - Udemy
					</h2>
					<h6 className="education-date">Aug. 2020 - Mar-2021</h6>
				</div>

				<div>
					<Accordion
						flush
						open={open}
						toggle={toggle}
						className="mx-3"
					>
						<AccordionItem>
							<AccordionHeader targetId="4">
								Overview
							</AccordionHeader>
							<AccordionBody accordionId="4" className="overview">
								30 hours of Python learning with nearly 200
								exercises and quizzes. Increase knowledge of
								Python3 syntax along with deep understanding of
								Data Structures and Algorithms in the Python
								syntax.
							</AccordionBody>
						</AccordionItem>
						<AccordionItem>
							<AccordionHeader targetId="5">
								Skills Gained
							</AccordionHeader>
							<AccordionBody accordionId="5" className="skills">
								<ListGroup flush>
									{pythonSkills.map((skill) => (
										<ListGroupItem key={skill}>
											{skill}
										</ListGroupItem>
									))}
								</ListGroup>
							</AccordionBody>
						</AccordionItem>
					</Accordion>
				</div>
			</section>

			<section className="mt-3 mb-3">
				<div className="mx-3">
					<h2 className="education-title text-warning">Books</h2>
					<h6 className="education-date">Because why Not?</h6>
				</div>
				<div>
					<Accordion
						flush
						open={open}
						toggle={toggle}
						className="mx-3"
					>
						<AccordionItem>
							<AccordionHeader targetId="8">
								Books
							</AccordionHeader>
							<AccordionBody accordionId="8" className="books">
								<ListGroup flush>
									{books.map((book) => (
										<ListGroupItem key={book}>
											{book}
										</ListGroupItem>
									))}
								</ListGroup>
							</AccordionBody>
						</AccordionItem>
					</Accordion>
				</div>
			</section>
		</div>
	);
};

// TODO: Add home link button at top of page. See the comment right above the main header.
// TODO: change the backgrond of the accordion so it matches the backgrond.
// TODO: add animations.

export default Education;
