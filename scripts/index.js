//Форма
const Popup = document.querySelector('.popup');
const openProfileButton = document.querySelector('.profile__button-edit');
const closeButton = Popup.querySelector('.popup__button-close');

const containerPopup = document.querySelector('.popup__container');
const openAddCard = containerPopup.querySelector('profile__button-add')

//Форма редактирования профиля

const nameProfileInput = document.querySelector('.form__input_type_name');
const jobProfileInput = document.querySelector('.form__input_type_job');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');


//Карточки
const popupCard = document.getElementById('popup-card');
const cardTemplate = document.querySelector('.card').content;
const cardsContainer = document.querySelector('.cards');
const cardOpenBtn = document.querySelector('.profile__button-add');
const cardClosebtn = document.querySelector('.popup__button-close_type_card');

const nameCardInput = popupCard.querySelector('.form__input_type_cardname');
const linkCardInput = popupCard.querySelector('.form__input_type_link');
const cardAddBtn = popupCard.querySelector('.form__button-save-card');

const popupBigImg = document.getElementById('popup-img');
const bigImg = popupBigImg.querySelector('.popup__img');
const bigImgTitle = popupBigImg.querySelector('.popup__img-title');
const closeBigImgBtn = popupBigImg.querySelector('.popup__button-close_type_img');

const initialCards = [
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

const popupOpenedCard = function () {
  popupCard.classList.add('popup_opened');
}

const popupCloseCard = function () {
  popupCard.classList.remove('popup_opened');
}

//Карточка
const creatCard = function (item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardName = cardElement.querySelector('.card__caption').textContent = item.name;
  const cardLink = cardElement.querySelector('.card__img').src = item.link;
  cardElement.querySelector('.card__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__heart_active')
  })
  cardElement.querySelector('.card__img').addEventListener('click', () => openBigImg(item));

  deleteCardBtn(cardElement);
  cardsContainer.prepend(cardElement);
};

initialCards.forEach(creatCard);


//Добавление карточки
const hendelSubmitCard = (event) => {
  event.preventDefault();
  const valueCard = ({
    name: nameCardInput.value,
    link: linkCardInput.value,
  }
  );
  creatCard(valueCard);
  popupCloseCard();
}

cardAddBtn.addEventListener('click', hendelSubmitCard);

//Функция удаления
function hendelDeleteCard(event) {
  const deleteBtn = event.target.closest('.card');
  deleteBtn.remove();
}

function deleteCardBtn(cardElement) {
  cardElement.querySelector('.card__delete').addEventListener('click', hendelDeleteCard);
}

//Функиция отрытия картинки
const openBigImg = function(item) {
  bigImg.src = item.link;
  bigImgTitle.textContent = item.name;
  
  popupBigImg.classList.add('popup_opened');
}

function closeBigImg() {
  popupBigImg.classList.remove('popup_opened');
}

//Функция открытия и закрытия попап
const popupOpenClose = function () {
  nameProfileInput.value = nameProfile.textContent;
  jobProfileInput.value = jobProfile.textContent;
  Popup.classList.toggle('popup_opened');
}


//Функция отправки формы
function handleFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameProfileInput.value;
  jobProfile.textContent = jobProfileInput.value;
  popupOpenClose()
}

Popup.addEventListener('submit', handleFormSubmit);
openProfileButton.addEventListener('click', popupOpenClose);
closeButton.addEventListener('click', popupOpenClose);
cardOpenBtn.addEventListener('click', popupOpenedCard);
cardClosebtn.addEventListener('click', popupCloseCard);
closeBigImgBtn.addEventListener('click', closeBigImg);