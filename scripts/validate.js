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
  activeButton(formButton, rest);
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      if (hasInvalidInput(formInputs)) {
        activeButton(formButton, rest);
      } else {
        disableButton(formButton, rest);
      }
      checkInputValidity(input,form);
    });
  });
};

//Функция проверяет поля ввода и выводит сообщение ошибки при невалидности 
const checkInputValidity = (input,form) => {
  if (input.checkValidity()) {
    hideInputError(input,form)
  } else {
    showInputError(input,form)
  }
};

const showInputError = (input,form) => {
  const errorInputContainer = form.querySelector(`#${input.id}-error`);
  errorInputContainer.textContent = input.validationMessage;
}

const hideInputError = (input,form) => {
  const errorInputContainer = form.querySelector(`#${input.id}-error`);
  errorInputContainer.textContent = ''
  input.classList.remove('form__input_type_error')
}

const hasInvalidInput = (formInputs) => {
  return formInputs.some(item => !item.validity.valid)
}

//Функции делающии кнопки активными/неактивными 
const activeButton = (button, { inactiveButtonClass }) => {
  button.classList.add(inactiveButtonClass );
  button.setAttribute('disabled', true)
}

const disableButton = (button, { inactiveButtonClass }) => {
  button.classList.remove(inactiveButtonClass );
  button.removeAttribute('disabled', true)
}

startValidation(containerElement);


