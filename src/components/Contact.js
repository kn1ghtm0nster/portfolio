import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/Contact.css";
import {
	Nav,
	NavItem,
	NavLink,
	Form,
	FormGroup,
	Label,
	Input,
	Container,
	Button,
} from "reactstrap";

const Contact = () => {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			<div>
				<div>
					<h1 className="display-1 my-3 text-center">
						Contact{" "}
						<span className="text-warning">Information</span>
					</h1>
				</div>
				<hr className="text-warning my-2"></hr>
				<h3 className="text-center display-6">
					<span className="text-warning">Socials</span> {`&`} Resume
				</h3>
				<Nav justified>
					<NavItem>
						<NavLink href="https://www.linkedin.com/in/diegoquintanilla/">
							<i className="bi bi-linkedin text-white icon"></i>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="https://github.com/kn1ghtm0nster">
							<i className="bi bi-github text-white icon"></i>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="https://www.instagram.com/mrquintanillaforreal/">
							<i className="bi bi-instagram text-white icon"></i>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="https://twitter.com/QUESADILLA69">
							<i className="bi bi-twitter text-white icon"></i>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">
							<i className="bi bi-file-earmark-arrow-down-fill text-white icon"></i>
						</NavLink>
					</NavItem>
				</Nav>
				<hr className="text-warning my-2"></hr>
				<Container style={{ width: "75%" }} className=" mb-5">
					<h3 className="text-center display-6">Email Me!</h3>
					<Form>
						<FormGroup>
							<Label htmlFor="subject" className="text-warning">
								Subject
							</Label>
							<Input
								id="subject"
								name="subject"
								placeholder="Email Subject"
								required
							/>
						</FormGroup>
						<FormGroup>
							<Label htmlFor="email" className="text-warning">
								Email
							</Label>
							<Input
								id="email"
								name="email"
								placeholder="your-email@example.com"
								required
							/>
						</FormGroup>
						<FormGroup>
							<Label for="message" className="text-warning">
								Message
							</Label>
							<Input
								style={{ height: "7rem" }}
								id="message"
								name="message"
								type="textarea"
								placeholder="Type message..."
								required
							/>
						</FormGroup>
						<Button color="warning" className="mb-3">
							Send <i className="bi bi-send"></i>
						</Button>
					</Form>
				</Container>
			</div>
		</div>
	);
};

// TODO: Include area for email and phone number
// TODO: add animations for socials and resume icons same as home page.

export default Contact;
