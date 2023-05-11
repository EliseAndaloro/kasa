import '../App.css';
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import Image from "../assets/IMG_homepage_banner.png";

function Home() {
  return (
    <div className="App">
      <Banner title="Chez vous, partout et ailleurs" imgSrc={Image} />
      <Gallery />
    </div>
  );
}

export default Home;
