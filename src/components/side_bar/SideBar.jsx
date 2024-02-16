import React from "react";
import { SideChannel } from "../side_channels/channels";
import { Recommended } from "../Recomendations/Recom";
import { useState } from "react";
import './SideBar.css'

export function SideBar({Open=true}) {
  return (
    <div className="B-Sidebar">
      <div className="SideBar">
        {Open &&(
          <>
          <div>
          <Recommended></Recommended>
          </div>
            <div>
              <SideChannel></SideChannel>
            </div>
          </>

        )

        }

      </div>
    </div>
  );
}