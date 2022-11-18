import { useRef, useState } from "react";

const Form = ({ setAlertMessage }) => {
  const btn = useRef(null);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  let headers = new Headers();

  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContactForm((values) => ({ ...values, [name]: value }));
  };

  const handleOnsubmit = async (e) => {
    e.preventDefault();
    btn.current.disabled = true;
    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    // headers.append("Origin", "*");

    try {
      const res = await fetch("https://michky.cyclic.app/api/v1/contacts", {
        // mode: "cors",
        method: "POST",
        headers: headers,
        body: JSON.stringify(contactForm),
      });

      const data = await res.json();

      if (data.status === "success") {
        setAlertMessage(data.message);
        btn.current.disabled = false;
        setContactForm({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      btn.current.disabled = false;
      if (err.response) {
        console.log("err", err.response.data.message);
      } else if (err.request) {
        console.log("err", "Something went wrong, try again later!");
      } else {
        console.log("err", err.message);
      }
    }
  };

  return (
    <form className="form" onSubmit={handleOnsubmit}>
      <input
        type="text"
        placeholder="name"
        className="form-text-input"
        id="name"
        required
        name="name"
        value={contactForm.name}
        onChange={handleOnChange}
      />
      <input
        type="email"
        placeholder="email"
        className="form-text-input"
        id="email"
        required
        name="email"
        value={contactForm.email}
        onChange={handleOnChange}
      />
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="5"
        className="form-text-input"
        placeholder="message"
        required
        value={contactForm.message}
        onChange={handleOnChange}
      ></textarea>
      <button className="form-btn" type="submit" ref={btn}>
        Send message
      </button>
    </form>
  );
};

export default Form;
