import React from "react";
import './Cat.css';
import { CatCard } from "./CatCard/CatCard";


export const Cat = function (props) {
  return (
    <div className="App__item">
      <CatCard with={props.with} item={props.item} count={props.count} weight={props.weight}/>
      <p className="App__item-text">Чего сидишь? Порадуй котэ, <a href="#">купи.</a></p>  
    </div>
  )
}