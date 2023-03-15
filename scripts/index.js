
let containerPopup = document.querySelector('.popup');
let openButton = document.querySelector('.profile__button-edit');
let closeButton = containerPopup.querySelector('.popup__botton-close');

let nameInput = document.querySelector('.form__input_type_name');
let jobInput = document.querySelector('.form__input_type_job');



let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');

function popupOpen() {
  containerPopup.classList.add('popup_opened');
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function popupClose() {
  containerPopup.classList.remove('popup_opened');

}

function handleFormSubmit(evt) {
  evt.preventDefault();

  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;

  popupClose()
}

containerPopup.addEventListener('submit', handleFormSubmit);
openButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);