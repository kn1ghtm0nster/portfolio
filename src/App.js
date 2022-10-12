import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import AllRoutes from "./routes/AllRoutes";

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
