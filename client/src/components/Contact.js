import { useEffect, useState } from "react";
import Form from "./Form";

const Contact = () => {
	const [alertMessage, setAlertMessage] = useState("");

	useEffect(() => {
		let alertTimeout = setTimeout(() => {
			setAlertMessage("");
		}, 5000);

		return () => {
			clearTimeout(alertTimeout);
		};
	}, [alertMessage]);

	return (
		<section className='contact-section' id='contact'>
			<div className='contact-content'>
				<div className='form-section'>
					<h5>Drop a message</h5>
					<Form setAlertMessage={setAlertMessage} />
					{alertMessage && <p className='alert-message'>{alertMessage}</p>}
				</div>
				<div className='img-section'>
					<div className='contact-art'></div>
					<div className='contact-art-2'></div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
