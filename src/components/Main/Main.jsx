import React from "react";
import { Cat } from "../Cat/Cat";
import './Main.css';


export const Main = function () {
  return (
    <div className="App__main">
      <Cat with='с фуа-гра' item='1' count='10' weight='0,5'/>
      <Cat with='с рыбой' item='2' count='40' weight='2'/> 
      <Cat with='с курой' item='5' count='100' weight='5'/>
    </div>
  )
}