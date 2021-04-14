import React from 'react';
import Movie from './Movie';

const style = {
	maxWidth: '900px',
	margin: '50px auto 0',
};

const Movies = (props) => {
	return (
		<div style={style}>
			{props.movies.map((movie) => (
				<Movie key={movie.id} movie={movie} onToggleLike={props.onToggleLike} onToggleBookmark={props.onToggleBookmark} />
			))}
		</div>
	);
};

export default Movies;
