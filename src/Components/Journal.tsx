import React from "react";
import UserInput from "./UserInput";
import EntriesLog from "./EntriesLog";
export interface Props {}

export default function Journal(props: Props) {
	const [userTopicInput, setUserTopicInput] = React.useState();
	const [userDescriptionInput, setUserDescriptionInput] = React.useState();
	const [allEntries, setAllEntries]: any = React.useState([]);
	function getEntryData(event: any): void {
		event.target.id === "entryTopic" ? setUserTopicInput(event.target.value) : setUserDescriptionInput(event.target.value);
	}

	function addEntry(): void {
		const currentEntries: object[] = [];
		const inputEntry: {
			topic: string | undefined;
			description: string | undefined;
		} = {
			topic: userTopicInput,
			description: userDescriptionInput,
		};

		if (inputEntry.topic && inputEntry.description) currentEntries.push(inputEntry);

		allEntries.forEach((entry) => {
			if (entry.topic && entry.description) currentEntries.push(entry);
		});
		console.log(currentEntries);
		setAllEntries(currentEntries);
	}
	return (
		<div className="flex flex-wrap justify-center">
			<UserInput getEntryData={getEntryData} addEntry={addEntry} />
			<EntriesLog userEntries={allEntries} />
		</div>
	);
}
