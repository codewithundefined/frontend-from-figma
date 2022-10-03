import React from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/Create.css";
import { AiOutlineArrowRight } from "react-icons/ai";
export default function Create() {
	const navigate = useNavigate();

	return (
		<div className="create-page">
			<h1 className="create-page-header">
				Create
				<br />
				a
				<br />
				<span className="event-text">Event</span>
			</h1>

			<form
				onSubmit={(ev) => {
					ev.preventDefault();

					navigate("/event");
				}}
				className="create-form"
			>
				<input
					type="text"
					placeholder="Enter Event name"
					name="event-name"
					id="event-name"
				/>
				<input
					type="text"
					placeholder="Enter Host name"
					name="host-name"
					id="host-name"
				/>

				<input
					type="datetime-local"
					name="start-datetime"
					id="start-datetime"
					placeholder="Enter start time"
				/>
				<input
					type="datetime-local"
					name="end-datetime"
					id="end-datetime"
					placeholder="Enter end time"
				/>
				<input
					type="text"
					placeholder="Enter event location"
					name="event-location"
					id=" event-location"
				/>
				<input
					type="file"
					placeholder="Select event photo"
					name="event-photo"
					id="event-photo"
				/>

				<button className="event-next-btn" type="submit">
					Next <AiOutlineArrowRight />
				</button>
			</form>
		</div>
	);
}
