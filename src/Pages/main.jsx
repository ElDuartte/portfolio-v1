import "./styles/home.scss";
import profilePic from "../assets/profile-pic.svg";
import { Link } from "react-router-dom";

function Main() {
  return (
    <div className="home container">
      <section className="hero">
        <img src={profilePic} className="profile-pic" alt="profile pic" />
        <div className="hero-description">
          <h1>hola</h1>
          <p>this is main this is main this is main this is main</p>
          <Link to="/home">{">>"}</Link>
        </div>
      </section>
    </div>
  );
}

export default Main;
