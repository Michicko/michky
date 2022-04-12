const Form = () => {
	return (
		<form className='form'>
			<input
				type='text'
				placeholder='name'
				className='form-text-input'
				id='name'
        required
			/>
			<input
				type='email'
				placeholder='email'
				className='form-text-input'
				id='email'
        required
			/>
			<textarea
				name='message'
				id='message'
				cols='30'
				rows='5'
				className='form-text-input'
				placeholder='message'
        required
			></textarea>
			<button className='form-btn' type='submit'>
				Send message
			</button>
		</form>
	);
};

export default Form;
