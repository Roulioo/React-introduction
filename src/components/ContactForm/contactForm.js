import React, { useState } from 'react';
import '../../components/ContactForm/contactForm.css';

const ContactForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		comment: '',
	});

	const onUpdateData = (event) => {
		console.log('EVENT TARGET', event.target);
		console.log('EVENT', event);

		const target = event.target;
		const name = target.name;
		const value = target.value;

		console.log('TARGET', target);
		console.log('FORMDATA', formData);

		const data = { ...formData };

		console.log('DATA', data);

		console.log('NAME', name);
		console.log('VALUE', value);

		data[name] = value;
		setFormData(data);
	};

	const onSubmitForm = (event) => {
		event.preventDefault();
		console.log('formData', formData);
	};

	return (
		<div className="contactForm">
			<form action="" onSubmit={onSubmitForm}>
				<div className="title">Contact Us</div>
				<div>
					<input type="text" name="firstName" value={formData.firstName} onChange={onUpdateData} placeholder="First Name" autoFocus required />
					<input type="text" name="lastName" value={formData.lastName} placeholder="Last Name" onChange={onUpdateData} required />
				</div>
				<input type="email" name="email" value={formData.email} onChange={onUpdateData} placeholder="Email" required />
				<textarea name="comment" form="cform" value={formData.comment} onChange={onUpdateData} placeholder="Message" required />
				<button id="submit" name="submit" type="submit"></button>
			</form>
		</div>
	);
};

export default ContactForm;
