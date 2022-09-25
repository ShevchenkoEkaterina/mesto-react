import React from 'react';

function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <div className="element__upp">
        <img className="element__image" alt={props.card.name} src={props.card.link} onClick={handleClick}/>
        <button type="button" className="element__delete"></button>
      </div>
      <div className="element__bottom">
          <h2 className="element__description">{props.card.name}</h2>
        <div className="element__likes">
          <button type="button" className="element__like"></button>
          <p className="element__number-of-likes">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}

export default Card;