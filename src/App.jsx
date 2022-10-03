import "./Styles/App.css";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Event from "./Components/Event";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/create" element={<Create />} />
				<Route path="/event" element={<Event />} />
			</Routes>
		</div>
	);
}

export default App;
