import "./home.scss";
import profilePic from "./assets/profile-pic.svg";

function Home() {
  return (
    <div className="home container">
      <section className="hero">
        <img src={profilePic} className='profile-pic' alt="profile pic" />
        <div className="hero-description">
          <h1>hola</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
            corrupti fugiat non ullam, alias perferendis quis magni consequatur
            in, cumque dolore. Saepe velit, quia obcaecati quos quisquam amet
            quidem! Consectetur.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
