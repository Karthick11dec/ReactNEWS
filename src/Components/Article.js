const Article = ({ section, title, byline, date, abstract,url,IMGurl }) => {
	// console.log(url);
	return (
		<div className='card mb-4 ml-5 mt-5 mr-5'>
			<div className='row no-gutters'>
				<div className='col-md-3'>
					<img src={url} alt='' />
				</div>
				<div className='col-md-9'>
					<div className='card-body'>
						<p className='section '>{section}</p>
						<p className='title'>{title}</p>
						<p className='byline'>{byline}</p>

						<p className='date'>{date}</p>
						<p className='abstract'>
							{abstract}...
							<a href={IMGurl}>Read more</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Article;