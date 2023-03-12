console.log('hello world');

let containerPopup = document.querySelector('.popup');
let openButton = document.querySelector('.profile__button-edit');
let closeButton = containerPopup.querySelector('.popup__botton-close');
let saveButton = containerPopup.querySelector('.popup__button-save');

let nameInput = document.querySelector('.popup__name');
let jobInput = document.querySelector('.popup__job');



let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__job');

function popupOpen() {
	containerPopup.classList.add('popup__opened');
	nameInput.value = nameProfile.textContent;
	jobInput.value = jobProfile.textContent;
}

function popupClose () {
	containerPopup.classList.remove('popup__opened');
	
}

function handleFormSubmit (evt) {
	evt.preventDefault();

	nameProfile.textContent = nameInput.value;
	jobProfile.textContent = jobInput.value;

	containerPopup.classList.remove('popup__opened');
}

containerPopup.addEventListener('submit', handleFormSubmit); 
openButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);
saveButton.addEventListener('click', handleFormSubmit);