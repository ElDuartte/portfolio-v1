import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="home-container">
      <div className="card-background"></div>
      <div className="home-text-container">
        <div className="home-title-container">
          <h1 className="home-title">JUAN</h1>
          <h1 className="home-title-second">FELIPE</h1>
        </div>
        <h2 className="home-sub-title">web developer</h2>
        {/* Read{" "} */}
        <Link href="main">
          <a className="home-button"> &#62;&#62; </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
