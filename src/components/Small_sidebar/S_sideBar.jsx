import "./S_sideBar.css";
import envivoicon from "../../imgs/envivo.png";
import contractIcon from "../../imgs/contract.png";
import { stream_cards } from "../../data/streams_data";

export const SmallSideBar = () => {
  return (
    <>
    <div className="allSmallSideBar">
        <div className="open-menu">
              <button className="contractbttn">
              <img className="btnimg" src={contractIcon} alt="Contract Icon" />
              </button>
              <button className="envivoicon">
              <img className="btnimg-onlive" src={envivoicon} alt="Contract Icon" />
              </button>
          </div>
        <div className="Small-sidebar-main-container">
          {stream_cards.map((stream) => (
            <div key={stream.id} className="Small-LiveChannels">
              <div className="Small-streams_image">
                  <img className="Small-Live_logo" src={stream.streamer_icon} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};