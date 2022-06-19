import React from "react";
import Entry from "./Entry";
export interface Props {
	userEntries: any;
}

export default function EntriesLog(props: Props) {
	const entries = props.userEntries.map((entry, index) => {
		return <Entry key={index} currentEntry={entry} />;
	});

	return (
		<React.Fragment>
			<h3 className="w-full text-center text-gray-500 text-lg sm:text-2xl lg:text-4xl ">Currently tracking : 100 days of code </h3>
			<section>{entries}</section>
		</React.Fragment>
	);
}
