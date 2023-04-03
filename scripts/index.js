//Форма
const popupEditProfile = document.querySelector('.popup_edit-profile');
const buttonCloseEditProfile = document.querySelector('.popup__button-close');

const containerPopup = document.querySelector('.popup__container');
const buttonEditProfile = document.querySelector('.profile__button-edit')

//Форма редактирования профиля
const inputNameProfile = document.querySelector('.form__input_type_name');
const inputJobProfile = document.querySelector('.form__input_type_job');

const nameProfile = document.querySelector('.profile__name');
const jobProfile = document.querySelector('.profile__job');

//Карточки
const popupAddCard = document.querySelector('.popup_edit-card');
const cardTemplate = document.querySelector('.card').content;
const cardsContainer = document.querySelector('.cards');
const buttonAddCard = document.querySelector('.profile__button-add');
const buttonCloseAddCard = document.querySelector('.popup__button-close_type_card');

const inputNameCard = popupAddCard.querySelector('.form__input_type_cardname');
const inputLinkCard = popupAddCard.querySelector('.form__input_type_link');
const buttonSaveCard = popupAddCard.querySelector('.form__button-save-card');

const popupBigImg = document.querySelector('.popup_open-img');
const bigImg = popupBigImg.querySelector('.popup__img');
const bigImgTitle = popupBigImg.querySelector('.popup__img-title');
const buttonCloseBigImg = popupBigImg.querySelector('.popup__button-close_type_img');

//Карточка
const createCard = function (item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardName = cardElement.querySelector('.card__caption').textContent = item.name;
  const cardLink = cardElement.querySelector('.card__img').src = item.link;
  const cardAlt = cardElement.querySelector('.card__img').alt = item.name;
  cardElement.querySelector('.card__heart').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__heart_active')
  })
  cardElement.querySelector('.card__img').addEventListener('click', () => openBigImg(item));

  deleteCard(cardElement);
  return cardElement;
};

initialCards.forEach(card => {
  const newCard = createCard(card);
  cardsContainer.append(newCard);
});

//Добавление карточки
const hendelFormSubmitCard = (evt) => {
  evt.preventDefault();
  const valueCard = ({
    name: inputNameCard.value,
    link: inputLinkCard.value,
  }
  );
  cardsContainer.prepend(createCard(valueCard));
  closePopup(popupAddCard);
  const cardForm = document.querySelector('.form_card').reset()
}

buttonSaveCard.addEventListener('click', hendelFormSubmitCard);

//Функция удаления
function hendelDeleteCard(evt) {
  const deleteCard = evt.target.closest('.card');
  deleteCard.remove();
}

function deleteCard(cardElement) {
  cardElement.querySelector('.card__delete').addEventListener('click', hendelDeleteCard);
}

//Функиция отрытия картинки
const openBigImg = function (item) {
  bigImg.src = item.link;
  bigImgTitle.textContent = item.name;
  bigImg.alt = item.name;

  openPopup(popupBigImg);
}

//Функция открытия и закрытия попап

const openPopup = function (popup) {
  popup.classList.add('popup_opened');
}

const closePopup = function (popup) {
  popup.classList.remove('popup_opened');
}

//Функция отправки формы
function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  nameProfile.textContent = inputNameProfile.value;
  jobProfile.textContent = inputJobProfile.value;
  closePopup(popupEditProfile);
}

popupEditProfile.addEventListener('submit', handleFormSubmitProfile);

buttonEditProfile.addEventListener('click', () => {
  inputNameProfile.value = nameProfile.textContent;
  inputJobProfile.value = jobProfile.textContent;
  openPopup(popupEditProfile);
});

buttonCloseEditProfile.addEventListener('click', () => {
  closePopup(popupEditProfile);
});

buttonAddCard.addEventListener('click', () => {
  openPopup(popupAddCard);
});

buttonCloseAddCard.addEventListener('click', () => {
  closePopup(popupAddCard);
});
buttonCloseBigImg.addEventListener('click', () => {
  closePopup(popupBigImg);
});