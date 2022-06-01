import React from "react";
import UserInput from "./UserInput";

export interface Props {}

export default function Journal(props: Props) {
	const [userTopicInput, setUserTopicInput] = React.useState("");
	const [userDescriptionInput, setUserDescriptionInput] = React.useState("");

	function getEntryData(event: any): void {
		event.target.id === "entryTopic" ? setUserTopicInput(event.target.value) : setUserDescriptionInput(event.target.value);
	}

	return (
		<div className="flex flex-wrap justify-center align-bottom">
			<UserInput getEntryData={getEntryData} />
		</div>
	);
}
