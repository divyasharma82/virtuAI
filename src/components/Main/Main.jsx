import { assets } from '../../assets/assets';
import './main.css';

const Main = () => {
  return (
    <div className="main">
      <div className="nav">
        <p>VirtuAI</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        <div className="greet">
          <p>
            {' '}
            <span>Hello,Sam</span>{' '}
          </p>
          <p>How Can I help you today!</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>Suggest Beautiful place to see on an upcoming road trip</p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>Explain me what is PH value:</p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>Improve the readbility and quality of following code</p>
            <img src={assets.code_icon} alt="" />
          </div>
          <div className="card">
            <p>Explain what is asteriod</p>
            <img src={assets.compass_icon} alt="" />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder="Enter prompt here" />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            VirtuAI may display inacurate info,including about people so please
            double check its response. Your Privacy and VirtuAI Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
