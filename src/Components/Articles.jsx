import React, { Fragment } from 'react';
import Pagination from "./Pagination";

function Articles({ array, counter, setcounter }) {

	return (
		<Fragment>
			<div className="align">
				{array.map((i, ind) => (
					<h6 key={ind} className="p-1">
						<b>{i.webTitle} </b>
						<a href={i.webUrl} className="text"><small><i>Read Full Articles...</i></small></a>
						<hr></hr>
					</h6>
				)
				)}
				<Pagination setcounter={setcounter} counter={counter} align="d-flex justify-content-center" />
			</div>

		</Fragment>
	)
}

export default Articles
