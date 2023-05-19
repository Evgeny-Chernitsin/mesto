const enableValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-save ',
  inactiveButtonClass: 'form__button-save_disabled',
  activeButtonClass: 'form__button-save_valid',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'popup__error_visible'
}

//Функция начала валидации форм
const startValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector))
  forms.forEach(form => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    })
    setEventListeners(form, rest);
  })
};


const setEventListeners = (form, { inputSelector, submitButtonSelector, ...rest }) => {
  const formInputs = Array.from(form.querySelectorAll(inputSelector));
  const formButton = form.querySelector(submitButtonSelector);
  enebleButton(formButton, rest);
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      checkInputValidity(input)
      if (hasInvalidInput(formInputs)) {
        enebleButton(formButton, rest);
      } else {
        disableButton(formButton, rest);
      }
    });
  });
};

//Функция проверяет поля ввода и выводит сообщение ошибки при невалидности 
const checkInputValidity = (input) => {
  const errorInputContainer = document.querySelector(`#${input.id}-error`);
  if (input.checkValidity()) {
    errorInputContainer.textContent = ''
  } else {
    errorInputContainer.textContent = input.validationMessage;
  }
};

const hasInvalidInput = (formInputs) => {
  return formInputs.some(item => !item.validity.valid)
}

//Функции делающии кнопки активными/неактивными 
const enebleButton = (button, { inactiveButtonClass, activeButtonClass }) => {
  button.classList.remove(activeButtonClass);
  button.classList.add(inactiveButtonClass );
  button.setAttribute('disabled', true)
}

const disableButton = (button, { inactiveButtonClass, activeButtonClass }) => {
  button.classList.add(activeButtonClass);
  button.classList.remove(inactiveButtonClass );
  button.removeAttribute('disabled', true)
}

startValidation(enableValidation);


