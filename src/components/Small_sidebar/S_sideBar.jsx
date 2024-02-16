import "./S_sideBar.css";
import { stream_cards } from "../../data/streams_data";

export const SmallSideBar = () => {
  return (
    <div className="live-channels">
      {stream_cards.map((stream) => (
        <div key={stream.id} className="LiveChannels">
          <div className="streams_image">
              <img className="Live_logo" src={stream.streamer_icon} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};