import About from "../../components/About";
import Contact from "../../components/Contact";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation/Navigation";
import Projects from "../../components/Projects";

const Homepage = ({projects}) => {
	return (
		<>
			<Navigation />
			<Header />
			<About />
			<Projects projects={projects} />
			<Contact />
			<Footer />
		</>
	);
};

export default Homepage;
