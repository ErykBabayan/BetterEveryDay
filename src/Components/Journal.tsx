import React from "react";
import Entry from "./Entry";

export interface Props {}

export default function Journal(props: Props) {
	return (
		<div className="flex flex-wrap justify-center align-bottom">
			<Entry />
		</div>
	);
}
