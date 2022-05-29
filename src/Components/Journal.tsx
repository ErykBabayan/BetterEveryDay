import React from "react";

export interface Props {}

export default function Journal(props: Props) {
	return (
		<div className="flex justify-center align-bottom">
			<h2 className="mt-24 text-2xl sm:text-3xl md:text-4xl  text-center">What have you accomplished today?</h2>
		</div>
	);
}
