import '../App.css';
import Banner from "../components/Banner";
import Gallery from "../components/Gallery";

function Home() {
  return (
    <div className="App">
      <Banner title="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
}

export default Home;
