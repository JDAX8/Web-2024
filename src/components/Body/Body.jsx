import { SideBar } from "../side_bar/SideBar";
import { NavBar } from "../NavBar/NavBar";
import {StreamChannel} from "../StreamChannels/StreamChannels"
import { BigChannel } from "../BigChannelLive/BigChannel";
import { LiveCategory } from "../LiveCategory/LiveCategory";
import "./Body.css";

export function Body() {
  return (
    <>
      <div className="body-container">
        <div className="body-sidebar">
        <SideBar></SideBar>
        </div>   
        <h3>Streams destacados</h3>
        <div className="b-channels-container">
          <BigChannel></BigChannel>
        </div>
        <div className="color-line"></div>
        <div className="Category-section">
        <LiveCategory></LiveCategory>
        </div>
        <div className="s-channels-container">
          <StreamChannel></StreamChannel>
        </div>
      </div>
    </>
  );
}