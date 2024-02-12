import { SideBar } from "../side_bar/SideBar";
import { NavBar } from "../NavBar/NavBar";
import {StreamChannel} from "../StreamChannels/StreamChannels"
import { BigChannel } from "../BigChannelLive/BigChannel";
import "./Body.css";

export function Body() {
  return (
    <>
      <div className="body-container">
        <div className="body-sidebar">
        <SideBar></SideBar>
        </div>
        <div className="b-channels-container">
          <BigChannel></BigChannel>
        </div>
        <br />
        <div className="s-hannels-container">
          <StreamChannel></StreamChannel>
        </div>
      </div>
    </>
  );
}