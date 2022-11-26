import "../styles/Projects.css";
import { motion } from "framer-motion";
import "animate.css";
import { Link } from "react-router-dom";

const Projects = () => {
	document.title = "Projects";

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

	const giphyParty = [
		"Axios library was used via CDN in HTML template due to project being built during earlier portion of boot camp curriculum.",
		"Implemented use of Axios library to make external API calls to Giphy API in order to gain better understanding making asynchronous requests and allow users to view page while waiting on a response from API.",
		"Made use of asynchronous functions in order for users to view page without having to wait for the initial response from API therefore providing a friendly interface.",
		"Created logic for Javascript to use the search input and make request to API main Giphy search endpoint without reloading the page in order to add the response gif to the web page. This feature involved using the event object and preventing the default behavior for form submissions.",
		"Made use of DOM manipulation to create new elements from the search input results and display each result gif on page along with the ability to remove all images from the page providing the user with the ability to prevent page clutter.",
		"Implemented styling with Bootstrap 5 in order to gain more experience with the newer syntax and use new syntax to add support for different screen sizes.",
		"HTML index file was built with empty section in order to prevent hard coding all responses and make use of DOM object to add each response dynamically.",
		"Deployed project with GitHub pages service as this service provides excellent support for basic static pages.",
	];

	const htmlParser = [
		"Created Node.js script to generate a base text file with HTML code from valid websites and made use of Node's process and argv objects in order to read the terminal input from users.",
		"Implemented logic to only generate text files for valid websites in order to prevent users from seeing an error file when parsing all website inputs.",
		"Solved bug that was capturing invalid websites by ensuring the response object contained a valid domain property and if not, enabled logic to continue looping therefore ignoring the invalid websites.",
		"Made use of Axios library via NPM install to make external requests to websites user passed in to text files.",
		"With use of Axios, implemented use asynchronous function to make external requests to all websites url file contains.",
		"Implemented logic in error handling function to display websites that were invalid based on response from Axios calls as to provide feedback to the user via the terminal once all files have been created.",
		"Deployed source code to GitHub repository as project is meant to be used as a terminal tool and does not use a frontend visual or backend database.",
	];

	const jAPI = [
		"Made use of Express.js to implement RESTful API routes in order to access mock data from backend relational database tables.",
		"Used PostgreSQL to create class model Javascript files to prevent Express routes from handling query logic along with route logic which keeps in line with good practices in regards to separating route and query logic.",
		"Implemented authentication and authorization methods through the use of Bcrypt library via NPM to ensure user information is stored in database securely and setup middleware routes to ensure proper authorization for specific routes.",
		"Implemented JSON Web Token library to ensure user submissions for authentication cannot be intercepted and tampered as information received will be checked for validity in middleware functions that use authentication.",
		"Enabled search feature for companies route to accept a search query which will be used with model files to create a custom query in the backend database and results returned to the user accordingly therefore adding a more user friendly experience with the API.",
		"Updated tests after implementing search feature in order to ensure maximum test coverage and ensuring the tests still pass based on changes made to code base.",
		"Implemented middlware function to check for a user's admin status via their returned JSON Web Token in order to access specific admin routes and set up custom error to be returned if a user is not an admin to provide user with feedback.",
		"Corrected bug that was previously preventing admin users from accessing admin routes due to admin property not being set correctly upon logging in which and creating separate middlware function was the solution that I implemented.",
		"Added new middlware function to check for admin type or authenticated user in order to access specific user features or company features such as deleting, updating, or creating a new user or company which checks the admin property set on the JSON Web Token.",
		"Created additional tests for changes to company and user routes in order to ensure functions are responding with correct message based on whether or not a user is authenticated or has the correct authorization.",
		"Implemented feature and route for users to apply to open job IDs which would transfer information to backend table that keeps track of user applications and would additionally update the user's current applications array.",
		"Added check on model files to ensure no duplicate application requests are made from the API and set specific error messages to be sent to user as feedback if the user has previously applied to the same job.",
		"Deployed APi logic to GitHub as this portion of the overall project was just the first part and main Jobly application would be using a similar pre-built backend API with a React frontend.",
	];

	const currencyConverter = [
		"Created static website using Python and Flask to build the route framework and display correct HTML files.",
		"Implemented Jinja-2 templates to serve the correct HTML file once a successful conversion is made after user submits their amount and desired currency.",
		"Made use of the forex-python library to make external API calls to convert from one currency to another.",
		"Implemented routes for project with the use of Flask as project was mainly created with Python.",
		"Enabled conversion feature and setup logic on main application file to route user to correct route once the conversion response has been received from API.",
		"Enabled form validation with the uses of Bootstrap 5 to display error messages if a user enters invalid information or tries to submit conversion form without the current and new currencies to provide user with feedback making the application user friendly.",
		"Corrected app breaking bug which was due to some currency values not being available to convert through external API. Bug was resolved by importing the correct error class from the library and wrapping the conversion route with a try/except block to ensure form is not submitted and user gets an alert message instead.",
		"Added conversion and used response from API to display the correct currency symbol which prevented having to create an object with all possible currency symbols.",
		"Tested application with Python's unit test library which helped ensure that all routes were displaying correct information with successful conversions and all error messages were being displayed for their corresponding errors.",
		"Deployed applicaiton code to GitHub repository and left README file with instructions for users to download and use application on their local machine to prevent issues with constant API calls being made from live website and possible blacklisting.",
	];

	return (
		<div className="my-5">
			<h1 className="text-center display-2 text-warning" id="top">
				Projects
			</h1>

			{/* Jobly */}
			<section className="jobly animate__animated animate__fadeIn">
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
						Visit App <i className="bi bi-box-arrow-up-right"></i>
					</a>

					<a
						href="https://github.com/kn1ghtm0nster/jobly-frontend"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						Frontend <i className="bi bi-github"></i>
					</a>

					<a
						href="https://github.com/kn1ghtm0nster/jobly-backend"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						Backend <i className="bi bi-github"></i>
					</a>
					<hr className="text-warning" />
				</div>
			</section>

			{/* Poke-forum */}
			<motion.section
				className="mt-3"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
			>
				<div className="mx-3">
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
						Visit App <i className="bi bi-box-arrow-up-right"></i>
					</a>
					<a
						href="https://github.com/kn1ghtm0nster/Poke-Forum"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub <i className="bi bi-github"></i>
					</a>
					<hr className="text-warning" />
				</div>
			</motion.section>

			{/* Jobly-API */}
			<motion.section
				className="mt-3"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
			>
				<div className="mx-3">
					<h2 className="text-white display-6">Jobly-API</h2>
					<hr className="text-warning" />
				</div>
				<div className="mx-3">
					<ul>
						{jAPI.map((item) => (
							<li key={item} className="list-item">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="mx-3">
					<a
						href="https://github.com/kn1ghtm0nster/jobly-api"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub <i className="bi bi-github"></i>
					</a>
					<hr className="text-warning" />
				</div>
			</motion.section>

			{/* HTML-Parser */}
			<motion.section
				className="mt-3"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
			>
				<div className="mx-3">
					<h2 className="text-white display-6">HTML-Parser</h2>
					<hr className="text-warning" />
				</div>
				<div className="mx-3">
					<ul>
						{htmlParser.map((item) => (
							<li key={item} className="list-item">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="mx-3">
					<a
						href="https://github.com/kn1ghtm0nster/html-parser"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub <i className="bi bi-github"></i>
					</a>
					<hr className="text-warning" />
				</div>
			</motion.section>

			{/* Currency-Converter */}
			<motion.section
				className="mt-3"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
			>
				<div className="mx-3">
					<h2 className="text-white display-6">Currency Converter</h2>
					<hr className="text-warning" />
				</div>
				<div className="mx-3">
					<ul>
						{currencyConverter.map((item) => (
							<li key={item} className="list-item">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="mx-3">
					<a
						href="https://github.com/kn1ghtm0nster/currency-converter/"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub <i className="bi bi-github"></i>
					</a>
					<hr className="text-warning" />
				</div>
			</motion.section>

			{/* Giphy-Party */}
			<motion.section
				className="mt-3"
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
			>
				<div className="mx-3">
					<h2 className="text-white display-6">Giphy-Party</h2>
					<hr className="text-warning" />
				</div>
				<div className="mx-3">
					<ul>
						{giphyParty.map((item) => (
							<li key={item} className="list-item">
								{item}
							</li>
						))}
					</ul>
				</div>
				<div className="mx-3">
					<a
						href="https://kn1ghtm0nster.github.io/giphy-app/"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						Visit App <i className="bi bi-box-arrow-up-right"></i>
					</a>
					<a
						href="https://github.com/kn1ghtm0nster/giphy-app"
						className="text-warning text-decoration-none mx-3"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub <i className="bi bi-github"></i>
					</a>
					<hr className="text-warning" />
					<div className="mt-3 ">
						<Link to="/" className="btn btn-warning">
							Home <i class="bi bi-house"></i>
						</Link>
						<a href="#top" className="btn btn-warning mx-2">
							Top <i class="bi bi-arrow-bar-up"></i>
						</a>
					</div>
				</div>
			</motion.section>
		</div>
	);
};

export default Projects;
