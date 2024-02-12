import "./BigChannel.css";
import { stream_cards } from "../../data/streams_data";

export const BigChannel = () => {
  return (
    <div className="b-live-channels">
      {stream_cards.map((stream) => (
        <div key={stream.id} className="b-LiveChannels">
          <div className="b-streams_image">
            <img src={stream.src} alt="" />
            <div className="b-Live-section">EN VIVO</div>
            <div className="b-on_live">
            <div className="b-viewers_count">{stream.views} espectadores</div>
            </div>
          </div>
          <div className="b-info_stream">
            <div className="b-stream_desc">
              <h2 className="b-stream_title truncate">{stream.title}</h2>
              <div className="b-streamer_name">
              {/* <img className="b-Live_logo" src={stream.streamer_icon} alt="" /> */}
              <h2 className="b-Streamer_Name">{stream.streamer_name}</h2>
            </div>
              <p className="b-LiveCategory">{stream.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};