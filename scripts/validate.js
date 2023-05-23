const containerElement = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-save ',
  inactiveButtonClass: 'form__button-save_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'popup__error_visible'
}

//Функция начала валидации форм
const startValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector))
  forms.forEach(form => {
    setEventListeners(form, rest);
  })
};

const setEventListeners = (form, { inputSelector, submitButtonSelector, ...rest }) => {
  const formInputs = Array.from(form.querySelectorAll(inputSelector));
  const formButton = form.querySelector(submitButtonSelector);
  disableButton(formButton, rest);
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, rest);
      } else {
        activeButton(formButton, rest);
      }
      checkInputValidity(input);
    });
  });
};

//Функция проверяет поля ввода и выводит сообщение ошибки при невалидности 
const checkInputValidity = (input) => {
  if (input.checkValidity()) {
    hideInputError(input)
  } else {
    showInputError(input)
  }
};

const showInputError = (input) => {
  const errorInputContainer = document.querySelector(`#${input.id}-error`);
  errorInputContainer.textContent = input.validationMessage;
  input.classList.add('form__input_type_error')
}

const hideInputError = (input) => {
  const errorInputContainer = document.querySelector(`#${input.id}-error`);
  errorInputContainer.textContent = ''
  input.classList.remove('form__input_type_error')
}

const hasInvalidInput = (formInputs) => {
  return formInputs.some(item => !item.validity.valid)
}

//Функции делающии кнопки активными/неактивными 
const disableButton = (button, { inactiveButtonClass }) => {
  button.classList.add(inactiveButtonClass);
  button.setAttribute('disabled', true)
}

const activeButton = (button, { inactiveButtonClass }) => {
  button.classList.remove(inactiveButtonClass);
  button.removeAttribute('disabled', true)
}

startValidation(containerElement);


