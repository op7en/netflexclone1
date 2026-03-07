import { useState }  from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar.jsx";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import Footer from '../../components/Footer/Footer.jsx'

const Home = () => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="home/ ">
      <Navbar onSearch={(results) => setSearchResults}/>
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p>
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.{" "}
          </p>
          <div className="hero-btns">
            <button className="btn">
              <svg  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"#070707ff"} viewBox="0 0 24 24"><path d="M6.51 18.87c.15.09.32.13.49.13s.36-.05.51-.14l10-6c.3-.18.49-.51.49-.86s-.18-.68-.49-.86l-10-6a.99.99 0 0 0-1.01-.01c-.31.18-.51.51-.51.87v12c0 .36.19.69.51.87Z"></path></svg>
              Play
            </button>
            <button className='btn dark-btn'>
              <svg  xmlns="http://www.w3.org/2000/svg" width={36} height={36} fill={"#ffffffff"} viewBox="0 0 24 24"><path d="M12 22c5.51 0 10-4.49 10-10S17.51 2 12 2 2 6.49 2 12s4.49 10 10 10M11 7h2v2h-2zm0 4h2v6h-2z"></path></svg>
              More Info
            </button>
          </div>
          <TitleCards movies={searchResults.length ? searchResults : undefined}/>
        </div>
      </div>
      <div className="more-cards">
          <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
          <TitleCards title={"Only on Netflix"} category={"popular"}/>
          <TitleCards title={"Upcoming"} category={"upcoming"}/>
          <TitleCards title={"Top Pics for You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
