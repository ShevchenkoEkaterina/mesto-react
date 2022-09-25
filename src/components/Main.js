import React from 'react';
import Pen from '../images/Pen.svg';
import api from '../utils/Api.js';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState("");
  const [userDescription, setUserDescription] = React.useState("");
  const [userAvatar, setUserAvatar] = React.useState("");
  const [cards, setCards] = React.useState([ ]);

  React.useEffect(() => {
    api.getUserInfo()
      .then((result) => {
        setUserName(result.name)
        setUserDescription(result.about)
        setUserAvatar(result.avatar)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

    React.useEffect(() => {
      api.getInitialCards()
        .then((result) => {
          setCards(result)
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  return (
    <main>
      <section className="profile">
        <div className="profile__all-information">
          <div className="profile__photo">
            <img onClick={props.onEditAvatar} className="profile__avatar" alt="Аватар профиля" style={{ backgroundImage: `url(${userAvatar})` }} />
            <img className="profile__button-change-avatar" src={Pen} alt="Кнопка при наведении"/>
          </div>
          <div className="profile__info">
            <div className="profile__edit-name">
              <h1 className="profile__name">{userName}</h1>
              <button type="button" onClick={props.onEditProfile} className="profile__edit-button profile__button"></button>
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
        </div>
        <button type="button" className="profile__add-button profile__button" onClick={props.onAddPlace}></button>
      </section>
      <section>
        <ul className="elements">
        {cards.map((card) => <Card key={card.id} card={card} onCardClick={props.onCardClick}/>)}
        </ul>
      </section>
    </main>
  );

}

export default Main;