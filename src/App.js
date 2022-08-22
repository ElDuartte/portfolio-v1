import React, { useState } from "react";
import "./App.css";
import data from "./lang.json";
import avatar from "./img/avatar.png";
import Switch from "./components/Switch";

function App() {
  const [isToggled, setIsToggled] = useState(false);
  let lang;
  if (!isToggled) {
    lang = data.en;
  } else {
    lang = data.es;
  }

  return (
    //<!-- Balloon 'is-dark'  -->
    <div className="container">
      <section
        className="nes-container is-dark with-title is-centered"
        id="text-section"
      >
        <p className="title" style={{ fontSize: "30px" }}>
          {/* {data.es.Title} */}
          {lang.Title}
        </p>

        <section className="message-list container-content">
          <div className="container-text">
            <section className="message -right">
              {/*Balloon*/}
              <div className="nes-balloon from-right is-dark" id="text-section">
                <p>{lang.Text}</p>
                <p style={{ fontSize: "30px" }}>&#128071;&#128071;</p>
              </div>
              {/* avatar*/}
            </section>
            <div className="container-links">
              <a href="https://github.com/ElDuartte">
                <i className="link nes-icon github is-large"></i>
              </a>
              <a href="https://www.linkedin.com/in/juanfelipeduartemontanez/">
                <i className="nes-icon linkedin is-large"></i>
              </a>
            </div>
          </div>
          <img src={avatar} alt="avatar" className="avatar" />
        </section>
      </section>
      <div
        className="nes-container is-dark with-title is-centered container-switch"
        style={{ margin: "30px auto" }}
      >
        <p className="title" style={{ fontSize: "30px" }}>
          &#127468;&#127463; &#127466;&#127480;
        </p>
        <section className="switchLang">
          <Switch
            rounded={true}
            isToggled={isToggled}
            onToggle={() => setIsToggled(!isToggled)}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
