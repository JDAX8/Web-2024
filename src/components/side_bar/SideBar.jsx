import React from "react";
import { SideChannel } from "../side_channels/channels";
import { Recommended } from "../Recomendations/Recom";

export function SideBar() {
  return (
    <div className="SideBar">
      <div>
        <Recommended></Recommended>
      </div>
          <div>
            <SideChannel></SideChannel>
            <SideChannel></SideChannel>
            <SideChannel></SideChannel>
            <SideChannel></SideChannel>
            <SideChannel></SideChannel>

          </div>
    </div>
  );
}