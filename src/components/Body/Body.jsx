import React from "react";
import { SideChannel } from "../side_channels/channels";
import { SideBar } from "../side_bar/SideBar";
import { NavBar } from "../NavBar/NavBar";

export function Body() {
  return (
    <>
    <header>
      <NavBar></NavBar>
    </header>
      <SideBar></SideBar>
      <body>
        <h1>¡¡Hello World!!</h1>
      </body>
    </>
  );
}   


