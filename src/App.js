import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import Home from "./components/Home";

function App() {
	return (
		<div className="App">
			<Container>
				<Home />
			</Container>
		</div>
	);
}

export default App;
