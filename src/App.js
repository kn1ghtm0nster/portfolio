import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import AllRoutes from "./routes/AllRoutes";
// import Home from "./components/Home";

function App() {
	return (
		<div>
			<Container>
				<AllRoutes />
			</Container>
		</div>
	);
}

export default App;
