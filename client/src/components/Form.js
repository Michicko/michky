import { useRef, useState } from "react";
import axios from "axios";

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
    e.preventDefault();
    btn.current.disabled = true;
    let headers = new Headers();

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/json");
    headers.append("Origin", "https://michky.vercel.app");
    try {
      const res = await axios({
        url: "https://michky.cyclic.app/api/v1/contacts",
        method: "POST",
        data: contactForm,
        headers,
      });

      const data = await res;
      if (data.data.status === "success") {
        setAlertMessage(data.data.message);
        btn.current.disabled = false;
        setContactForm({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (err) {
      btn.current.disabled = false;
      console.log(err);
      if (err.response && err.response.data) {
        console.log("err", err.response.data.message);
      } else if (err.request) {
        console.log(err.message);
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
