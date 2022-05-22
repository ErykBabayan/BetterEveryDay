import React from "react";
import Typed from "typed.js"

export default function WelcomePage(){
    React.useEffect(() => {
		const options: {
            strings: string[]
            showCursor: boolean
            typeSpeed: number
        } = {
			strings: ["Welcome to BetterEveryDay"],
			showCursor: false,
			typeSpeed: 50,
		};
		const optionsText: {
            strings: string[]
            startDelay: number
            typeSpeed: number
        }  = {
			...options,
			strings: ["The only place <strong>you need</strong> to maintain your habbits."],
			startDelay: 2200,
			typeSpeed: 40,
		};

		const typedHeader = new Typed(".header-container", options);
		const typedText = new Typed(".text-container", optionsText);

		return () => {
			typedHeader.destroy();
			typedText.destroy();
		};
	}, []);
    return(
        <div className="flex justify-center items-center flex-wrap bg-linen h-screen text-center">
            <div>
                <h1 className="header-container text-7xl w-full"></h1>
                <p className="text-container text-2xl my-8"></p>
                <button className="px-8 py-4  rounded-xl border-2 border-paleSilver">Begin your journey</button>
            </div>
        </div>
    )
}