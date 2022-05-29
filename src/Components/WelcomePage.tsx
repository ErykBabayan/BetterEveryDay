import React from "react";
import Typed from "typed.js";

export interface Props {
	handlePageChange: () => void;
}

function handleChange(event: any): void {
	localStorage.setItem("username", event.target.value);
}

export default function WelcomePage(props: Props) {
	React.useEffect(() => {
		const options: {
			strings: string[];
			showCursor: boolean;
			typeSpeed: number;
		} = {
			strings: ["Welcome to BetterEveryDay"],
			showCursor: false,
			typeSpeed: 50,
		};
		const optionsText: {
			strings: string[];
			startDelay: number;
			typeSpeed: number;
			backSpeed: number;
		} = {
			...options,
			strings: [
				"The only place <strong>you need</strong> to maintain your habbits.",
				"The only place <strong>you need</strong> to become a better version of yourself.",
			],
			startDelay: 2200,
			typeSpeed: 40,
			backSpeed: 40,
		};

		const typedHeader = new Typed(".header-container", options);
		const typedText = new Typed(".text-container", optionsText);

		return () => {
			typedHeader.destroy();
			typedText.destroy();
		};
	}, []);

	return (
		<div className="flex justify-center items-center flex-wrap bg-linen h-screen text-center">
			<div>
				<h1 className="header-container text-4xl md:text-5xl lg:text-7xl px-6 w-full">Welcome to BetterEveryDay</h1>
				<p className="text-container text-lg md:text-2xl my-8 px-6"></p>
				<div className="w-full mt-16">
					<input
						onChange={handleChange}
						className="bg-inherit p-2 rounded-lg border-2 text-center border-paleSilver"
						placeholder="Tell us your name!"
						type="text"
					/>
				</div>
				<button
					onClick={props.handlePageChange}
					className="px-8 py-4 my-4 rounded-xl border-2 border-paleSilver hover:shadow-lg active:translate-y-0.5 active:shadow-xl"
				>
					Begin your journey
				</button>
			</div>
		</div>
	);
}
