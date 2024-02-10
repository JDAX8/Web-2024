import React from "react";
import  StreamChannel  from "../StreamChannels/StreamChannels";
import { stream_cards } from "../../data/streams_data";
const LiveChannels = () => {
  return (
    <div className="live-channels">
      {stream_cards.map((stream) => (
        <StreamChannel key={stream.id} streams={stream} />
      ))}
    </div>
  );
};

export default LiveChannels;