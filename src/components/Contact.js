import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Contact.css";
// import { Button } from "reactstrap";

const Contact = () => {
	return (
		<div className="contact-styles">
			<div>
				<h1 className="display-1 my-3 text-center">
					Contact <span className="text-warning">Information</span>
				</h1>
			</div>
			<div className="d-flex justify-content-center">
				<div className="card border-0 my-5" style={{ width: "30rem" }}>
					<img
						src="https://images.unsplash.com/photo-1643503640904-75c1a2093570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
						className="card-img-top"
						alt="social-media"
					/>
					<div className="card-body">
						<h5 className="card-title text-dark">
							Social Media Links
						</h5>

						<p className="card-text text-dark fs-5">
							Feel free to check out my social media links below
							and follow if you'd like!
						</p>
					</div>
					<div className="list-group list-group-flush">
						<a
							href="https://www.linkedin.com/in/diegoquintanilla/"
							className="list-group-item list-group-item-action border-top"
						>
							<i className="bi bi-linkedin text-primary"></i>
							{"      "}
							LinkedIn
						</a>
						<a
							href="https://github.com/kn1ghtm0nster"
							className="list-group-item list-group-item-action"
						>
							<i className="bi bi-github"></i>
							{"      "}
							Github
						</a>
						<a
							href="https://www.instagram.com/mrquintanillaforreal/"
							className="list-group-item list-group-item-action"
						>
							<i className="bi bi-instagram"></i>
							{"      "}Instagram
						</a>
						<a
							href="https://twitter.com/QUESADILLA69"
							className="list-group-item list-group-item-action"
						>
							<i className="bi bi-twitter text-info"></i>
							{"      "}
							Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

// TODO: Create email section for contact page
// TODO: Include area for email and phone number
// TODO: Add CV download button

export default Contact;
