import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Counter = () => {
	const { initValue } = useParams(); // REACT ROUTER PARAMS
	const [count, setCount] = useState(initValue); // STATE for increment number
	const [show, setShow] = useState(false); // STATE to display or not compteur

	// Update incrementation
	const onUpdate = (nbr) => {
		setCount(count + nbr);
	};

	// Display or not compteur
	const onDisplay = () => {
		setShow(!show);
	};

	let counter;

	if (show) {
		counter = (
			<div>
				<span className={count > 10 ? 'red' : ''}>
					{count === 0 ? 'zéro' : count}
				</span>
				<button onClick={() => onUpdate(1)}>+</button>
				<button onClick={() => onUpdate(-1)}>-</button>
			</div>
		);
	}

	return (
		<div>
			<button onClick={onDisplay}>Affichez/masquer le compteur</button>
			{counter}
		</div>
	);
};

export default Counter;
