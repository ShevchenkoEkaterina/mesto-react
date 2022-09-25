import React from 'react';

function ImagePopup(props) {

  return (
    <div className={`popup popup_show ${props.card ? 'popup_opened' : ' '}`}>
      <div className="popup__container-show">
        <button type="button" className="popup__close popup__show-close" onClick={props.onClose}></button> 
        <img src={props.card.link} alt={props.card.name} className="popup__image"/>
        <h2 className="popup__show-title">{props.card.name}</h2>
      </div>
    </div>
  );
}

export default ImagePopup;