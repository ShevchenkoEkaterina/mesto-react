import React from 'react';
import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';

function App() {

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick() {
    setSelectedCard(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
  }

  return (
  <div className="page">
    <div className="page__container">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name="edit" isOpen={isEditProfilePopupOpen} title="Редактировать профиль" onClose={closeAllPopups} children={<div><label className="input__field">
        <input type="text" required minLength="2" maxLength="40" placeholder="Имя" name="name" id="name-input" className="input__text input__text_name_edit"/>
        <span className="input__text-error" id ="name-input-error"></span>
      </label>
      <label className="input__field">
        <input type="text" required minLength="2" maxLength="200" placeholder="О себе" name="description" id="description-input" className="input__text input__text_description_edit"/>
        <span className="input__text-error" id ="description-input-error"></span>
      </label></div>}/>
      <PopupWithForm isOpen={isAddPlacePopupOpen} name="add" title="Новое место" onClose={closeAllPopups} children={<div><label className="input__field">
        <input type="text" required minLength="2" maxLength="30" placeholder="Название" name="title" id="title-input" className="input__text input__text_name_add"/>
        <span className="input__text-error" id ="title-input-error"></span>
      </label>
      <label className="input__field">
        <input type="url" required placeholder="Ссылка на картинку" id="url-input" name="url" className="input__text input__text_description_add"/>
        <span className="input__text-error" id ="url-input-error"></span>
      </label></div>}/>
      <PopupWithForm isOpen={isEditAvatarPopupOpen} name="avatar" title="Обновить аватар" onClose={closeAllPopups} children={<label className="input__field">
        <input type="url" required placeholder="Ссылка на фото аватара" id="url-input-avatar" name="avatar" className="input__text input__text_avatar"/>
        <span className="input__text-error" id ="url-input-avatar-error"></span>
      </label>}/>
      <PopupWithForm name="delete" title="Вы уверены?" onClose={closeAllPopups}/>
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
    </div>
  </div>
)
}

export default App;