import "./LandingPage.css";
import Logo from "../assets/logo.svg";
import Button from "./Button.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faLock } from "@fortawesome/free-solid-svg-icons";

export default function LandingPage() {
  return (
    <div className="container">
      <header className="header">
        <span>
          <img src={Logo} alt="aquarizz-logo" />
        </span>
        <div className="contactUsBtnContainer">
          {/* <input className="contactUsBtn" type="button" value="Contact us" />
          <FontAwesomeIcon className="contactUsIcon" icon={faEnvelope} /> */}
          <Button>Contact us</Button>
        </div>
      </header>
      <main className="hero">
        <div className="heroText">
          <span className="heroHeader">
            <p>
              <h2>Connecting</h2>
              <span className="italic">for the Love of Healthy Fish</span>
            </p>
          </span>
          <span className="heroFooter">
            A Social media community to connect and sell your items.
          </span>
          <br />
          <br />
          <Button className="signUpBtn">Sign up here!</Button>
        </div>
        <div className="heroForm">
          <div className="card">
            <h1>Login</h1>
            <form>
              <div className="inputBoxes usernameBox">
                <input className="usernameFld" placeholder="Username" />
                <FontAwesomeIcon className="icon" icon={faUser} />
              </div>
              <div className="inputBoxes passwordBox">
                <input className="passwordFld" placeholder="Password" />
                <FontAwesomeIcon className="icon" icon={faLock} />
              </div>

              <div className="rememberMeBox">
                <input className="checkboxBtn" type="checkbox" />
                <label>Remember me</label>
              </div>
              <Button className="loginBtn">Login</Button>

              <div className="forgotBox">
                <Button className="forgotBtn">Forgot Password</Button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}
