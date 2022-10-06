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
					<h1 className="display-1 my-3 text-center animate__animated animate__fadeIn animate__fast">
						Contact{" "}
						<span className="text-warning">Information</span>
					</h1>
				</div>
				<hr className="text-warning my-2 animate__animated animate__fadeIn animate__faster animate__delay-5s"></hr>
				<h3 className="text-center display-6 animate__animated animate__fadeIn animate__faster animate__delay-5s">
					<span className="text-warning">Social</span> Media
				</h3>
				<Nav justified>
					<NavItem>
						<NavLink href="/">
							<i className="bi bi-house text-white icon animate__animated animate__fadeIn animate__faster animate__delay-1s"></i>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="https://www.linkedin.com/in/diegoquintanilla/">
							<i className="bi bi-linkedin text-white icon animate__animated animate__fadeIn animate__faster animate__delay-2s"></i>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="https://github.com/kn1ghtm0nster">
							<i className="bi bi-github text-white icon animate__animated animate__fadeIn animate__faster animate__delay-3s"></i>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="https://www.instagram.com/mrquintanillaforreal/">
							<i className="bi bi-instagram text-white icon animate__animated animate__fadeIn animate__faster animate__delay-4s"></i>
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="https://twitter.com/QUESADILLA69">
							<i className="bi bi-twitter text-white icon animate__animated animate__fadeIn animate__faster animate__delay-5s"></i>
						</NavLink>
					</NavItem>
				</Nav>
				<hr className="text-warning my-2 animate__animated animate__fadeIn animate__faster animate__delay-5s"></hr>
				<Container
					style={{ width: "75%" }}
					className="animate__animated animate__fadeIn animate__faster animate__delay-5s"
				>
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
						<Button color="warning">
							Send <i className="bi bi-send"></i>
						</Button>
					</Form>
				</Container>
			</div>
		</div>
	);
};

export default Contact;
