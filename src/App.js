import ParticlesBg from "particles-bg";
import "./App.css";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

function App() {
  return (
    <div>
      <div className="card">
        <div className="card_body">
          <div className="profile text-center">
            <img src="/ozzy.jpg" className="avatar" />
            <div className="bg_content rd_12 p_8">
              <h1>OZZY JEENIOS</h1>
              <p>@ozzy.jeenios</p>
              <p>Tetetp semangat ya gaes!</p>
            </div>
            {/* <p>Tetep semangat ya gaes!</p> */}
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://www.instagram.com/ozzy.jeenios/"
            >
              <BsInstagram />
              <span>Instagram</span>
            </a>
          </div>
          <div className="mt-16">
            <a
              className="btn_action bg_content"
              href="https://www.github.com/alilatukau03/"
            >
              <BsGithub />
              <span>Github</span>
            </a>
          </div>
        </div>
      </div>
      <ParticlesBg type="color" bg={true} />
    </div>
  );
}

export default App;
