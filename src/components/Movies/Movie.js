import React from 'react';
import './Movie.css';

const Movie = (props) => {
	const date = props.movie.date.split(' ');

	return (
		<div className="card card full-image">
			<div className="wrapper" style={{ backgroundImage: `url(${props.movie.image})` }}>
				{/* HEADER */}
				<div className="header">
					<div className="date">
						<span className="day">{date[0]}</span>
						<span className="month">{date[1]}</span>
						<span className="year">{date[2]}</span>
					</div>
					<ul className="menu-content">
						{/* BOOKMARKS OR NOT */}
						<li>
							<a
								href="#"
								onClick={(e) => props.onToggleBookmark(e, props.movie.id)}
								className={props.movie.bookmark ? 'fa fa-bookmark' : 'fa fa-bookmark-o'}
							></a>
						</li>
						{/* NUMBER OF LIKES */}
						<li>
							<a href="#" onClick={(e) => props.onToggleLike(e, props.movie.id)} className={props.movie.like ? 'fa fa-heart' : 'fa fa-heart-o'}>
								<span>{props.movie.nbLike}</span>
							</a>
						</li>
						{/* NUMBER OF COMMENTS */}
						<li>
							<a href="#" className="fa fa-comment-o">
								<span>{props.movie.comment}</span>
							</a>
						</li>
					</ul>
				</div>

				{/* DATA OF MOVIE */}
				<div className="data">
					<div className="content">
						<span className="author">{props.movie.category}</span>
						<h1 className="title">
							<a href="#">{props.movie.title}</a>
						</h1>
						<p className="text">{props.movie.resume}</p>
						<a href={props.movie.trailer} target="_blank" className="button">
							Trailer
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Movie;
