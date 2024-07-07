import { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import './sidebar.css';
import { Context } from '../../context/Context';

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompt, setRecentPromt, newChat } = useContext(Context);

  const handleExtendedToggle = () => {
    setExtended(!extended);
  };

  const loadPrompt = async (prompt) => {
    setRecentPromt(prompt);
    onSent(prompt);
  };

  return (
    <div className="sidebar">
      <div className="top">
        <img
          src={assets.menu_icon}
          alt=""
          className="menu"
          onClick={handleExtendedToggle}
        />
        <div className="new-chat" onClick={() => newChat()}>
          <img src={assets.plus_icon} alt="" />
          {extended ? <p>New Chat</p> : ''}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent Search</p>
            {prevPrompt.map((item, index) => {
              return (
                <div
                  className="recent-entry"
                  key={index}
                  onClick={() => loadPrompt(item)}
                >
                  <img src={assets.message_icon} alt="" />
                  <p title={item}>{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : (
          ''
        )}
      </div>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="" />
          {extended ? <p>Help</p> : ''}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="" />
          {extended ? <p>Activity</p> : ''}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="" />
          {extended ? <p>Setting</p> : ''}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
