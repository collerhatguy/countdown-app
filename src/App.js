import CountDownList from "./components/CountDownList";
import facebookImage from "./images/icon-facebook.svg";
import instagramImage from "./images/icon-instagram.svg";
import pinterestImage from "./images/icon-pinterest.svg";
import "./styles/styles.css";

function App() {
  return (
    <main className="App">
      <CountDownList />
      <footer>
        <img src={facebookImage} alt="FaceBook"/>
        <img src={instagramImage} alt="Instagram"/>
        <img src={pinterestImage} alt="Pinterest"/>
      </footer>
    </main>
  );
}

export default App;
