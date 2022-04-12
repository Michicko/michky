import About from "../../components/About";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation/Navigation";
import Projects from "../../components/Projects";

const Homepage = () => {
	return (
    <>
      <Navigation/>
			<Header />
			<About />
			<Projects />
			<Contact/>
		</>
	);
};

export default Homepage;
