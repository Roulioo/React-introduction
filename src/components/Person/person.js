import React from 'react';
import styles from './person.module.css';

const Person = (props) => {
	// En dure ou alors via un fichier module css
	// const style = {
	// 	width: '60%',
	// 	margin: '16px auto',
	// 	border: '1px solid #eee',
	// 	boxShadow: '0 2px 3px #ccc',
	// 	padding: '16px',
	// 	textAlign: 'center',
	// };

	return (
		<div className={styles.person}>
			<h1>{props.name}</h1>
			<p>Age : {props.age}</p>
		</div>
	);
};

export default Person;
