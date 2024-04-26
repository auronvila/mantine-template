import {SideBar} from "@/components/Layout/SideBar";
import React from "react";
import Views from "@/components/Layout/Views";

export default function SimpleSideBar(){
  return (

    <div style={{backgroundColor: 'rgb(241,240,240)', display: 'flex', flex: ' 1 1 auto'}}>
      <SideBar/>
      <div style={{padding: '1rem', backgroundColor: 'rgb(241,240,240)', flex: 1}}>
        <Views/>
      </div>
    </div>
  )
}
