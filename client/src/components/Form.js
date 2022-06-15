import { useState } from "react";

const Form = () => {
	const [contactForm, setContactForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleOnChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;

		setContactForm((values) => ({ ...values, [name]: value }));
	};

	const handleOnsubmit = (e) => {
		e.preventDefault();
		console.log(contactForm);
	};

	return (
		<form className='form' onSubmit={handleOnsubmit}>
			<input
				type='text'
				placeholder='name'
				className='form-text-input'
				id='name'
				required
				name='name'
				value={contactForm.name}
				onChange={handleOnChange}
			/>
			<input
				type='email'
				placeholder='email'
				className='form-text-input'
				id='email'
				required
				name='email'
				value={contactForm.email}
				onChange={handleOnChange}
			/>
			<textarea
				name='message'
				id='message'
				cols='30'
				rows='5'
				className='form-text-input'
				placeholder='message'
				required
				value={contactForm.message}
				onChange={handleOnChange}
			></textarea>
			<button className='form-btn' type='submit'>
				Send message
			</button>
		</form>
	);
};

export default Form;
