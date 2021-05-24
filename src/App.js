import CountDownList from "./components/CountDownList";
import facebookImage from "./images/icon-facebook.svg";
import instagramImage from "./images/icon-instagram.svg";
import pinterestImage from "./images/icon-pinterest.svg";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <CountDownList />
      <footer>
        <img src={facebookImage} />
        <img src={instagramImage} />
        <img src={pinterestImage} />
      </footer>
    </div>
  );
}

export default App;
