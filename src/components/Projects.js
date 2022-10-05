import "../styles/Projects.css";
// import { useState } from "react";

const Projects = () => {
	// const [open, setOpen] = useState("");

	const pokeForum = [
		"Full-Stack Applciation built using Python and Flask to build the backend and communicate with relational database using PostgreSQL",
		"Set up relational database with PostgreSQL in order to setup custom Python classes and make backend queries from user input on the frontend of application",
		"Used Bcrypt to establish user authentication and authorization to prevent having to write our own custom encryption algorithms for user passwords and provide extra security to the passwords stored in backend database",
		"Used cookies in browser to store user authentication response from relational database in order to ensure routes were protected for non-authenticated users. In addition, using cookies provided a seemless way of removing user information from the browser once a user logged out of the application",
		"Made use of the public PokeAPI in order to build the backend database for all available pokemon in order to reduce time to render Pokemon information for routes that involve all or independent pokemon",
		"Added ability to show sprites for each Pokemon under the master Pokemon list in order to make the UI friendlier to new fans of the Pokemon games who don't yet know Pokemon by names",
		"Implemented routes using Python and Flask to render HTML templates and data for endpoint from relational database",
		"Used Jinja-2 Python library to make HTML templates dynamic and make use of the database responses by using Python data structures",
		"Made use of Bootstrap 5 in HTML templates in order to make application more accessible to mobile devices with a fluid UI",
		"Implemented testing with the use of Python's unit test library in order to use best practices for individual function and route testing. In addition, tests written ensured database was responding with the correct information and routes were responding with correct messages",
		"Deployed application to Heroku in order to make use of their free hosting service along with the compatibility for PostreSQL via the Heroku services making it easier to move the local database code to a live service with little change",
	];

	const joblyPoints = [
		"Used React.js and React Router Dom NPM library to set up routes for the application in order to create a static application that does not make requests to the backend server when visiting different routes. React frontend routes were used to match Express backend routes that were setup with relational database",
		"Made use of React hooks to keep track of state for users that are logged with local storage in the user's browser to ensure the correct routes are listed in the UI and frontend routes are protected from non-authenticated users",
		"Implemented Axios library in main application component to prevent AJAX calls from being un-organized across the remaining components. Additionally, having Axios in the main app component ensured the correct states were being tracked and passed down to the correct route and component that is being rendered",
		"Implemented feature for individual users to make updates to their profiles from frontend route by taking data from the user form and sending updates to backend API server with AJAX and ensured changes are saved by reloading the route once form has been submitted. Used Material UI library to add styling for application in order to get more experience with a different styling framework. In addition, Material UI was used as the library was created with mobile devices in mind meaning no additional changes need to be made for small screens as library already takes this into consideration",
		"Enabled form validation with Material UI in order to provide users with feedback if one or more fields are left empty when submitting the signup, login, or profile update forms. This further provides a friendlier UI experience for a user to prevent empty fields or incorrect values with the appropriate messaging",
		"Implemented search feature under companies route to filter all companies by names that resemble the user input therefore providing the user with a better experience rather than having to scroll past many company names",
		"Implemented feature for users to apply to available jobs and keep reference of current or new applications by making AJAX call from frontend to relational database as this would be used to reload the page due to change in the user's local storage state and this change would display the correct view for a job once a user has applied",
		"Corrected bug with application feature where applications were not being tracked unless a user logged out and logged back in. Made changes to the overall response object from the backend queries and the local storage object to keep track of the user's application array and update whenever the state changes",
		"Deployed backend Express code to Heroku in order to take advantage of compatibility with PostreSQL databases along with free hosting for applications",
		"Deployed frontend React code to Surge in order to display the frontend UI on a free publicly available hosting service and once site was deployed with Surge, I was able to view website without issues or errors from backend server which was being hosted on the Heroku platform",
	];

	return (
		<div className="my-5">
			<h1 className="text-center display-2 text-warning">Projects</h1>

			{/* Poke-forum */}
			<section className="mt-3">
				<div className="mx-3">
					<hr className="text-warning" />
					<h2 className="text-white display-6">Poke-Forum</h2>
					<hr className="text-warning" />
				</div>
				<div className="mx-3">
					<ul>
						{pokeForum.map((item) => (
							<li className="list-item" key={item}>
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="mx-3">
					<a
						href="https://poke-forum.herokuapp.com/"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						Visit App <i class="bi bi-box-arrow-up-right"></i>
					</a>
					<a
						href="https://github.com/kn1ghtm0nster/Poke-Forum"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub <i class="bi bi-github"></i>
					</a>
					<hr className="text-warning" />
				</div>
			</section>

			{/* Jobly */}
			<section className="mt-3">
				<div className="mx-3">
					<h2 className="text-white display-6">Jobly</h2>
					<hr className="text-warning" />
				</div>

				<div className="mx-3">
					<ul>
						{joblyPoints.map((item) => (
							<li className="list-item" key={item}>
								{item}
							</li>
						))}
					</ul>
				</div>

				<div className="mx-3">
					<a
						href="https://jobly-diego.surge.sh/"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						Visit App <i class="bi bi-box-arrow-up-right"></i>
					</a>

					<a
						href="https://github.com/kn1ghtm0nster/jobly-frontend"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						Frontend <i class="bi bi-github"></i>
					</a>

					<a
						href="https://github.com/kn1ghtm0nster/jobly-backend"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						Backend <i class="bi bi-github"></i>
					</a>
					<hr className="text-warning" />
				</div>
			</section>

			{/* Giphy-Party */}
			<section className="mt-3">
				<div className="mx-3">
					<h2 className="text-white display-6">Giphy-Party</h2>
					<hr className="text-warning" />
				</div>
				<div className="mx-3">
					<ul></ul>
				</div>
				<div className="mx-3">
					{/* <a
						href="https://poke-forum.herokuapp.com/"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						Visit App <i class="bi bi-box-arrow-up-right"></i>
					</a>
					<a
						href="https://github.com/kn1ghtm0nster/Poke-Forum"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub <i class="bi bi-github"></i>
					</a> */}
					<hr className="text-warning" />
				</div>
			</section>

			{/* HTML-Parser */}
			<section className="mt-3">
				<div className="mx-3">
					<h2 className="text-white display-6">HTML-Parser</h2>
					<hr className="text-warning" />
				</div>
				<div className="mx-3">
					<ul></ul>
				</div>
				<div className="mx-3">
					{/* <a
						href="https://poke-forum.herokuapp.com/"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						Visit App <i class="bi bi-box-arrow-up-right"></i>
					</a>
					<a
						href="https://github.com/kn1ghtm0nster/Poke-Forum"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub <i class="bi bi-github"></i>
					</a> */}
					<hr className="text-warning" />
				</div>
			</section>

			{/* Jobly-API */}
			<section className="mt-3">
				<div className="mx-3">
					<h2 className="text-white display-6">Jobly-API</h2>
					<hr className="text-warning" />
				</div>
				<div className="mx-3">
					<ul></ul>
				</div>
				<div className="mx-3">
					{/* <a
						href="https://poke-forum.herokuapp.com/"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						Visit App <i class="bi bi-box-arrow-up-right"></i>
					</a>
					<a
						href="https://github.com/kn1ghtm0nster/Poke-Forum"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub <i class="bi bi-github"></i>
					</a> */}
					<hr className="text-warning" />
				</div>
			</section>

			{/* Currency-Converter */}
			<section className="mt-3">
				<div className="mx-3">
					<h2 className="text-white display-6">Currency Converter</h2>
					<hr className="text-warning" />
				</div>
				<div className="mx-3">
					<ul></ul>
				</div>
				<div className="mx-3">
					{/* <a
						href="https://poke-forum.herokuapp.com/"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						Visit App <i class="bi bi-box-arrow-up-right"></i>
					</a>
					<a
						href="https://github.com/kn1ghtm0nster/Poke-Forum"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub <i class="bi bi-github"></i>
					</a> */}
					<hr className="text-warning" />
				</div>
			</section>
		</div>
	);
};

// TODO: Add remaining projects: Giphy-Party, HTML-Parser, Jobly-API, Currency-Converter

export default Projects;
