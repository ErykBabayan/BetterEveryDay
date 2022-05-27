import React from "react";
import "./App.css";
import WelcomePage from "./Components/WelcomePage";
import Journal from "./Components/Journal";

function App() {
	const [hasAppStarted, setHasAppStarted] = React.useState(false);
	const username: string | null = localStorage.getItem("username") === null ? "Guest" : localStorage.getItem("username");

	function startApp(): void {
		setHasAppStarted((prevHasAppStarted) => !prevHasAppStarted);
		localStorage.setItem("welcomePageShown", "shown");
	}

	return (
		<div className="bg-linen">
			{!hasAppStarted && <WelcomePage handlePageChange={startApp} />}
			{hasAppStarted && (
				<div className="h-screen p-10">
					<div>Hi, {username}!</div>
					<Journal />
				</div>
			)}
		</div>
	);
}

export default App;
