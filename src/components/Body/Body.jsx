import { SideBar } from "../side_bar/SideBar";
import { NavBar } from "../NavBar/NavBar";
import {StreamChannel} from "../StreamChannels/StreamChannels"
import "./Body.css";

export function Body() {
  return (
    <>
      <div className="body-container">
        <SideBar></SideBar>
        <div className="channels-container">
          <StreamChannel></StreamChannel>
        </div>
      </div>
    </>
  );
}