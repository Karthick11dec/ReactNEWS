import React, { Fragment, useEffect, useState } from 'react';
import Home from "./Home";

const Navbar = () => {

	const [heading, setheading] = useState("");
	const [Value, setValue] = useState("");
	const [array, setarray] = useState([]);
	const [counter, setcounter] = useState(1);
	const [Query, setQuery] = useState("");
	const [Period, setPeriod] = useState("");
	const [Headlines, setHeadlines] = useState(true);
	const key = "cab0edec-75a0-49bc-bbb5-a75cbdf1c403";

	useEffect(() => {

		let fullDate = new Date().toLocaleDateString().split("/");
		let halfDate = fullDate.splice(0, 2);
		let pad = halfDate.map(i => {
			if (i.length === 1) {
				return i.padStart(2, '0');
			}
			else {
				return i;
			}
		})
		setPeriod(fullDate.concat(pad).join("-"));

	}, [])

	const Search = () => {

		setHeadlines(false);

		if (Value !== "") {
			if (isNaN(Value)) {
				setheading(` ${Value}`);
				setcounter(1);
				setQuery(Value);
				fetch(`https://content.guardianapis.com/search?page=${counter}&q=${Query}&api-key=${key}`)
					.then(res => res.json())
					.then(res => {
						setarray(res.response.results);
					})
			}
			else {
				setheading(` ${Value}`);
				setcounter(1);
				setPeriod(Value);
				fetch(`https://content.guardianapis.com/search?page=${counter}&from-date=${Period}&api-key=${key}`)
					.then(res => res.json())
					.then(res => {
						setarray(res.response.results);
					})
			}
		}

	}

	useEffect(() => {

		if (counter > 0) {
			fetch(`https://content.guardianapis.com/search?page=${counter}&q=${Query}&from-date=${Period}&api-key=${key}`)
				.then(res => res.json())
				.then(res => {
					let response = res.response.results;
					if (response.length > 0) {
						setarray([]);
						setTimeout(() => {
							setarray(res.response.results);
						}, 500);
					}
				})
		}

	}, [counter, Query, Period])

	return (
		<Fragment>
			<div className="container-fluid bg-dark bar1">
				<div className="row p-2">
					<div className="col-lg-6 col-md-6 col-sm-12 col-12 flexify">
						<div
							className="text-light navbar-brand text-center"
							onClick={() => { window.location.reload() }}
						>
							THE <span className="text-color">NEWS</span>
							<div className="fs-5">Express</div>
						</div>
					</div>
					<div className="offset-lg-2 col-lg-3 offset-lg-1 col-md-4 offset-sm-2 col-sm-8 offset-sm-2 offset-2 col-8 offset-sm-2 flexify">
						<div className="input-group input-group-sm padd">
							<input
								className="form-control"
								type="text"
								placeholder="Search Title (or) yyyy-mm-dd"
								value={Value}
								onChange={(e) => { setValue(e.target.value) }}
							/>
							<button
								className="btn btn-outline-success"
								onClick={Search}
							>
								Search
							</button>
						</div>
					</div>
				</div>
			</div>

			<Home
				array={array}
				counter={counter}
				setcounter={setcounter}
				setQuery={setQuery}
				heading={heading}
				setheading={setheading}
				setValue={setValue}
				Period={Period}
				Headlines={Headlines}
				setHeadlines={setHeadlines}
			/>

		</Fragment>
	);
};

export default Navbar;