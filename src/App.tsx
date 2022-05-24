import React from "react";
import "./App.css";
import WelcomePage from "./Components/WelcomePage";

function App() {
	const [hasAppStarted, setHasAppStarted] = React.useState(false);

	function startApp() {
		setHasAppStarted((prevHasAppStarted) => !prevHasAppStarted);
		// localStorage.setItem("welcomePageShown","shown") for later use
	}

	return (
		<div className="bg-linen">
			{!hasAppStarted && <WelcomePage handlePageChange={startApp} />}
			{hasAppStarted && <div className="h-screen">Welcome {localStorage.getItem("username")}</div>}
		</div>
	);
}

export default App;
