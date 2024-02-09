import stream from "../../imgs/stream.jpg";
import React from "react";
import './LiveChannels.css'


export const StreamChannel = ({streams}) => {
  return (
    <>
      <div class="LiveChannels">
        <div class="streams_image">
          <img src={stream} alt="" />
          <div class="on_live"></div>
          <div class="viewers_count"></div>
        </div>
        <div class="info_stream">
          <div class="streamer_name">
              <img class="Live_logo" src="https://static-cdn.jtvnw.net/jtv_user_pictures/593b5641-c626-4ba4-ba49-11cb33f6c3e8-profile_image-300x300.png" alt="" />
              <h2 class="Streamer_Name">ILLOJUAN</h2>
          </div>
          <div class="stream_desc">
            <div class="stream_title">
              <h2>🏡 MI PRIMERA VEZ EN SOUTH PARK</h2>
            </div>
              <p class="LiveCategory">Just Chatting</p>
              <div class="stream_etiqueta"><p>Español</p></div>
          </div>
        </div>
      </div>
    </>
  );
};