import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup(props) {
  const titleRef = React.useRef();
  const urlRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.onAddPlace({
      title: titleRef.current.value,
      url: urlRef.current.value,
    });
  } 

  return (
    <PopupWithForm isOpen={props.isOpen} name="add" title="Новое место" onClose={props.onClose} onSubmit={handleSubmit} children={
      <div>
        <label className="input__field">
          <input type="text" ref={titleRef} required minLength="2" maxLength="30" placeholder="Название" name="title" id="title-input" className="input__text input__text_name_add"/>
          <span className="input__text-error" id ="title-input-error"></span>
        </label>
        <label className="input__field">
          <input type="url" ref={urlRef} required placeholder="Ссылка на картинку" id="url-input" name="url" className="input__text input__text_description_add"/>
          <span className="input__text-error" id ="url-input-error"></span>
        </label>
      </div>
    }/>
  );
}

export default AddPlacePopup;