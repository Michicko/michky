import About from "../../components/About";
import Header from "../../components/Header";
import Navigation from "../../components/Navigation/Navigation";
import Projects from "../../components/Projects";

const Homepage = () => {
	return (
    <>
      <Navigation/>
			<Header />
			<About />
			<Projects/>
		</>
	);
};

export default Homepage;
