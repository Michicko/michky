import SocialIcons from "./SocialIcons";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="header" id="home">
      {/* logo */}
      <img src={logo} alt="Michky logo" className="header-logo" />
      <div className="header-content">
        <h1 className="primary-heading header-heading">Hi!</h1>
        <div className="header-circle">
          {/* <div className="header__spinning-circle"></div> */}
          <div className="header-outer-circle">
            <div className="header-inner-circle">
              <div className="header-inner-content">
                <p className="header-lead">My Name is</p>
                <h2 className="header-main-heading">Michael</h2>
                <h3 className="header-title">I'm a Frontend Developer.</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="header-socials">
          <SocialIcons />
        </div>
      </div>
    </header>
  );
};

export default Header;
