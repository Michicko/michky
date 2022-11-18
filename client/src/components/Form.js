import { useRef, useState } from "react";

const Form = ({ setAlertMessage }) => {
	const btn = useRef(null);
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

	const handleOnsubmit = async (e) => {
		btn.current.disabled = true;
		e.preventDefault();
		const res = await fetch("/api/v1/contacts", {
			method: "POST",
			headers: {
				Accept: "application/json, text/plain, */*",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(contactForm),
		});
		const data = await res.json();
		if (data.status === "success") {
			setAlertMessage(data.message);
			setContactForm({
				name: "",
				email: "",
				message: "",
			});
		}
		btn.current.disabled = false;
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
			<button className='form-btn' type='submit' ref={btn}>
				Send message
			</button>
		</form>
	);
};

export default Form;
