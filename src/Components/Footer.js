const Footer = () => {
	return (
		<div className='text-center pt-4' style={{background:"black",height:"200px",}}>
			<p className="pt-4 color">All rights reserverd &copy; {new Date().getFullYear()}</p>
			<i className="fab fa-facebook-square fa-3x p-3 color zoom"></i>
			<i className='fab fa-twitter fa-3x p-3 color zoom'></i>
			<i className='fab fa-instagram fa-3x p-3 color zoom'></i>
		</div>
	);
};

export default Footer;