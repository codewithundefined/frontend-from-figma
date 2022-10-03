import "../Styles/Event.css";
import React from "react";
import BirthdayCake from "../images/birthday-cake.png";
import Calendar from "../images/Calendar.svg";
import Location from "../images/Location.svg";
import Arrow from "../images/Arrow.svg";

export default function Event() {
	return (
		<div className="event-page">
			<div className="event-photo">
				<img
					className="event-image"
					src={BirthdayCake}
					alt="Birthday cake"
				/>
			</div>
			<div className="event-details">
				<div className="event-header">
					<div className="event-title">Birthday Bash</div>
					<div className="event-host">
						Hosted by <span>Elysia</span>
					</div>
				</div>
				<div className="event-other-details">
					<div className="event-details-row">
						<div className="first-child">
							<div className="first-child-icon">
								<img src={Calendar} alt="Calendar Icon" />
							</div>
							<div className="first-child-content">
								<div className="row-title">
									18 August 6:00PM
								</div>
								<div className="row-desc">
									to{" "}
									<span className="end-datetime">
										19 August 1:00PM
									</span>{" "}
									UTC +10
								</div>
							</div>
						</div>
						<div>
							<img src={Arrow} alt="Arrow Icon" />
						</div>
					</div>
					<div className="event-details-row">
						<div className="first-child">
							<div className="first-child-icon">
								<img src={Location} alt="Location Icon" />
							</div>
							<div className="first-child-content">
								<div className="row-title">Street Name</div>
								<div className="row-desc">
									Suburb, State, Postcode
								</div>
							</div>
						</div>
						<div>
							<img src={Arrow} alt="Arrow Icon" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
