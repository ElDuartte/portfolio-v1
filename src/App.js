import "./App.css";
import data from "./lenguage.json";

import avatar from "./img/avatar.png";

function App() {
  // let lang = true;
  // let langJson = "";
  // if (lang === true) {
  //   langJson = "en";
  // }
  return (
    //<!-- Balloon 'is-dark'  -->
    <div className="container">
      <section
        class="nes-container is-dark with-title is-centered"
        id="text-section"
      >
        <p class="title" style={{ fontSize: "30px" }}>
          {data.es.Title}
        </p>

        <section class="message-list container-content">
          <div className="container-text">
            <section class="message -right">
              {/*Balloon*/}
              <div class="nes-balloon from-right is-dark" id="text-section">
                <p>{data.es.Text}</p>
                <p style={{ fontSize: "30px" }}>&#128071;&#128071;</p>
              </div>
              {/* avatar*/}
            </section>
            <div className="container-links">
              <a href="https://github.com/ElDuartte">
                <i class="link nes-icon github is-large"></i>
              </a>
              <a href="https://www.linkedin.com/in/juanfelipeduartemontanez/">
                <i class="nes-icon linkedin is-large"></i>
              </a>
            </div>
          </div>
          <img src={avatar} alt="avatar" className="avatar" />
        </section>
      </section>
    </div>
  );
}

export default App;
