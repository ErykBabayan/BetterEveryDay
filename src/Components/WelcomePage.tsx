import React from "react";
import Typed from "typed.js"

export interface Props {
    handlePageChange: () => void
}

export default function WelcomePage(props: Props){
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
            backSpeed: number
        }  = {
			...options,
			strings: ["The only place <strong>you need</strong> to maintain your habbits.","The only place <strong>you need</strong> to become a better version of yourself."],
			startDelay: 2200,
			typeSpeed: 40,
            backSpeed: 40
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
                <button onClick={props.handlePageChange} className="px-8 py-4  rounded-xl border-2 border-paleSilver">Begin your journey</button>
            </div>
        </div>
    )
}