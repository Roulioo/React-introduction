import React, {useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ContactForm from './components/ContactForm/contactForm';
import Counter from './components/Counter/counter';
import Person from './components/Person/person';
import Rating from './components/Rating/rating';
import Movies from './components/Movies/Movies'
import uniqid from 'uniqid';

const App = () => {
	
	// COMPONENT PERSON

	const [persons, setPersons] = useState([
		{
			name: 'Marc Zuckerberg',
			age: 35,
		},
		{
			name: 'Jack Dorsey',
			age: 42,
		},
		{
			name: 'Jeff Bezos',
			age: 55,
		},
		{
			name: 'Bill Gates',
			age: 64,
		},
		{
			name: 'Steve Wozniak',
			age: 69,
		},
	]);

	/**** FIRST SOLUTION ****/

	// const list = persons.filter((person) => person.age > 20)
	// 					.map((person) => <Person {...person} key={uniqid()} />);
		
	/************************/

	/**** SECOND SOLUTION ****/

	// const list = persons.filter((person) => person.age > 20)
	// 					.map((person) => (
	// 						console.log('HELLO'),
	// 						<Person {...person} key={uniqid()} />)
	// 					);

	/************************/

	/**** THIRD SOLUTION ****/

	const list = persons.filter((person) => person.age > 20)
						.map((person) => {
							return <Person {...person} key={uniqid()} />;
						});

	/************************/

	// COMPONENT RATING

	/**
	 * Display notes
	 * @param {*} value value choised to display it
	 */
	const displayNotes = (value) => {
        console.log(`${value} / 5`)
	}

	/************************/

	// COMPONENT MOVIES

	const [movies, setMovies] = useState([
		{
			id: '4365',
			title: 'Le Roi',
			date: '24 septembre 2019',
			category: 'Drame historique',
			resume:
				"Dans l'Angleterre du 15e siècle, Hal, un prince capricieux et bon à rien, devient un roi puissant lorsqu'il hérite à contrec?ur du trône et de ses conflits",
			like: false,
			nbLike: 18,
			comment: 3,
			bookmark: false,
			trailer: 'https://www.youtube.com/watch?v=bVH7LurFHHc',
			image: 'images/the-king.jpg',
		},
		{
			id: '5307',
			title: 'Joker',
			date: '09 Octobre 2019',
			category: 'Drame / Thriller',
			resume:
				'A Gotham City, Arthur Fleck, un comédien de stand-up raté. Méprisé de tous et bafoué, il bascule peu à peu dans la folie pour devenir le Joker, un dangereux tueur psychotique.',
			like: false,
			nbLike: 7,
			comment: 1,
			bookmark: false,
			trailer: 'https://www.youtube.com/watch?v=zAGVQLHvwOY',
			image: 'images/joker.jpg',
		},
		{
			id: '6798',
			title: 'Docteur Sleep',
			date: '30 Octobre 2019',
			category: 'Fantasy / Thriller',
			resume:
				"Suite de Shining dans laquelle Danny, devenu adulte, est encore traumatisé et souffre de problèmes d'alcoolisme et de gestion de la colère. Comme son père.",
			like: false,
			nbLike: 10,
			comment: 6,
			bookmark: true,
			trailer: 'https://www.youtube.com/watch?v=BOzFZxB-8cw',
			image: 'images/docteur-sleep.jpg',
		},
	]);

	/**
	 * Change bookmark value on click
	 * @param {*} e e is a event of element clicked
	 * @param {*} movie_id movie-id is a movie id clicked
	 * @returns boolean (true,false)
	 */
	const onToggleBookmark = (e, movie_id) => {
		e.preventDefault();
		setMovies(
			movies.map((movie) => {
				if (movie.id === movie_id) {
					movie.bookmark = !movie.bookmark;
				}
				return movie;
			})
		);
	};

	/**
	 * Change movie like value on click
	 * @param {*} e e is a event of element clicked
	 * @param {*} movie_id movie_id is a movie id clicked
	 * @returns boolean (true,false)
	 */
	const onToggleLike = (e, movie_id) => {
		e.preventDefault();
		setMovies(
			movies.map((movie) => {
				if (movie.id === movie_id) {
					movie.nbLike += movie.like ? -1 : 1;
					movie.like = !movie.like;
				}
				return movie;
			})
		);
	};

	/************************/

	// REACT ROUTER

	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					{/* COMPONENT CONTACT FORM */}
					<Route exact path="/">
						<ContactForm />
					</Route>
					{/* COMPONENT COUNTER */}
					{/* Necessary to add : before params to use in url */}
					<Route path="/counter/:initValue">
						<Counter />
					</Route>
					{/* COMPONENT PERSON */}
					<Route path="/person">
						<Person name="bob-1" age="26" />
						<Person name="bob-2" age="52" />
						<Person name="bob-3" age="78" />
						<p>/**************************/</p>
						{list}
						{/* COMPONENT RATING */}
					</Route>
					<Route path="/rating">
						<Rating rank="4" displayNote={displayNotes} />
						<Rating rank="1" />
						<Rating rank="2" />
					</Route>
					{/* COMPONENT MOVIES */}
					<Route path="/movies">
						<Movies movies={movies} onToggleLike={onToggleLike} onToggleBookmark={onToggleBookmark} />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
