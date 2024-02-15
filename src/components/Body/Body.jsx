import { SideBar } from "../side_bar/SideBar";
import { NavBar } from "../NavBar/NavBar";
import {StreamChannel} from "../StreamChannels/StreamChannels"
import { BigChannel } from "../BigChannelLive/BigChannel";
import { LiveCategory } from "../LiveCategory/LiveCategory";
import { TopGroups } from "../TopgroupsLive/TopGroups";
import "./Body.css";

export function Body() {
  return (
    <>
      <div className="body-container">
        <div className="body-sidebar">
        <SideBar></SideBar>
        </div>   
        <h3 className="title1">Streams destacados</h3>
        <div className="b-channels-container">
          <BigChannel></BigChannel>
        </div>
        <div className="color-line"></div>
        <div className="Category-section">
          <h3 className="title2">Categorías Top en vivo</h3>
          <LiveCategory></LiveCategory>
          <div className="color-line-2"></div>
            <h3 className="title4">Grupos Top en directo</h3>
            <div className="topgroups-sections">
            <TopGroups></TopGroups>
          </div>
          <div className="color-line-3"></div>
        </div>
        <h3 className="title3">Canales de Juegos recomendados</h3>
        <div className="s-channels-container">
          <StreamChannel></StreamChannel>
        </div>
      </div>
    </>
  );
}