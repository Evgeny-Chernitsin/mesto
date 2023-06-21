export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


class Card {
  constructor(data, templateSelector) {
    this._link = data.link;
    this._name = data.name;
    this._templateSelector = templateSelector;
  }

 
  generateCard() {
    this._card = document.querySelector(this._templateSelector).content.cloneNode(true).children[0];

    this._card.querySelector('.card__img').src = this._link;
    this._card.querySelector('.card__caption').textContent = this._name;
    this._card.querySelector('.card__img').alt = this._name;

    this._setEventListenets();

    return this._card;
  }

   _deleteCard = () => {
    this._card.remove();
  }

  _toggleLikeCard = () => {
    this._card.querySelector('.card__heart').classList.toggle('card__heart_active');
  }

  _setEventListenets () {
    this._card.querySelector('.card__delete').addEventListener('click', this._deleteCard);
    this._card.querySelector('.card__heart').addEventListener('click', this._toggleLikeCard);
  }

  getCard() {
    this._generateCard();
  }

}

initialCards.forEach((item) => {
  const card = new Card(item, '.card');
  const cardElement = card.generateCard();
  document.querySelector('.cards').append(cardElement);
});

export default Card;