import React from "react";
import { Link } from "react-router-dom";

import EventImage from "../images/landing-page-event.svg";

export default function LandingPage() {
	return (
		<div className="landing-page">
			<header className="header">
				<h1 className="header-title">
					Imagine if <br />
					<span className="header-snapchat">Snapchat</span>
					<br />
					had events.
				</h1>
				<p className="header-para">
					Easily host and share events with your friends across any
					social media.
				</p>
			</header>

			<main>
				<img
					className="landing-page__image"
					src={EventImage}
					alt="Event"
				/>
			</main>

			<footer>
				<Link className="btn-create__event" to="/create">
					🎉 Create my event
				</Link>
			</footer>
		</div>
	);
}
