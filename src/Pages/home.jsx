import "./styles/home.scss";
import profilePic from "../assets/profile-pic.svg";
import { useTranslation } from "react-i18next";

function Home() {
  const { t } = useTranslation();
  return (
    <div className="home container">
      <section className="hero">
        <img src={profilePic} className="profile-pic" alt="profile pic" />
        <div className="hero-description">
          <h1>{t("home.title")}</h1>
          <p>{t("home.description")}</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
