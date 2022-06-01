import React from "react";

export interface Props {
	getEntryData: (event: any) => void;
}

export default function UserInput(props: Props) {
	return (
		<React.Fragment>
			<h2 className="mt-24 text-2xl sm:text-3xl lg:text-5xl  text-center">What have you accomplished today?</h2>
			<div className="w-full flex flex-wrap justify-center mt-12">
				<input
					onChange={props.getEntryData}
					id="entryTopic"
					className="bg-inherit p-2 rounded-lg border-2 text-center w-5/6 md:w-4/6 xl:w-3/6 border-paleSilver"
					type="text"
					placeholder="Title"
				/>
				<div className="w-full flex justify-center mt-2">
					<textarea
						onChange={props.getEntryData}
						id="entryDescription"
						placeholder="Description"
						className="resize-none w-5/6 md:w-4/6 xl:w-3/6 bg-inherit p-2 rounded-lg border-2 text-center border-paleSilver"
						maxLength={500}
					></textarea>
				</div>
				<button className="px-8 py-4 my-8 w-5/6 md:w-4/6 xl:w-3/6 rounded-xl border-2 border-paleSilver hover:shadow-lg active:translate-y-0.5 active:shadow-xl">
					Add
				</button>
			</div>
			<hr className="w-5/6 xl:w-4/6 h-0.5 bg-paleSilver" />
		</React.Fragment>
	);
}
