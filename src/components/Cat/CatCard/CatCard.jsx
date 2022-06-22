import React, { useState } from "react";
import './CatCard.css';

export const CatCard = function (props) {

  let [selected, setSelect] = useState(false)

  return (
    <div> 
      <div className={`App__catCard ${selected ? 'App__catCard--selected' : ''}`} onClick={ () => { setSelect(!selected) } }>
        <p>Сказочное заморское яство</p>
        <h3>Нямушка</h3>
        <h4>{props.with}</h4>
        <p>{props.count} порций</p>
        {(props.item > 1 && props.item < 5) ? <p>{props.item} мыши в подарок</p> : props.item >= 5 ? <p>{props.item} мышей в подарок <br/>заказчик доволен</p> : <p>мышь в подарок</p>}
        <div className="App__weight">
          <p>{props.weight}</p>
          <span>кг</span> 
        </div> 
      </div>
    </div>
  )
}