import React, { Fragment } from 'react'

function Footer() {
	return (
		<Fragment>
			<div className='footer bg-dark bar4'>
				<div>
					<i className="fab fa-facebook-square p-2 zoom color"></i>
					<i className='fab fa-twitter p-2 zoom color'></i>
					<i className='fab fa-instagram p-2 zoom color'></i>
				</div>
				<div>
					<i className="text-muted"><small>All rights reserverd &copy; {new Date().getFullYear()}</small></i>
				</div>
			</div>
		</Fragment>
	)
}

export default Footer
