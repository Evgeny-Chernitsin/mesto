export const containerFormSelector = {
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-save',
  inactiveButtonClass: 'form__button-save_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'popup__error_visible'
}

class FormValidator {
  constructor(containerFormSelector, formElement) {
    this._formElement = formElement;
    this._inputSelector = containerFormSelector.inputSelector;
    this._submitButtonSelector = containerFormSelector.submitButtonSelector;
    this._inactiveButtonClass = containerFormSelector.inactiveButtonClass;
    this._inputErrorClass = containerFormSelector.inputErrorClass;
    this._errorClass = containerFormSelector.errorClass;
  }

  enableValidation = () => {
    this._forms = Array.from(document.querySelectorAll(this._fromElement));
    this._forms.forEach(() => {
      this._setEventListeners();
    })
  }

  _setEventListeners = () => {
    this._formInputs = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._formInputs.forEach(input => {
      input.addEventListener('input', () => {
        this._checkInputValidity();
      });
    });
  }

  _checkInputValidity = () => {
    if (this._inputSelector.checkValidity()) {
      this._hideInputError();
      this._activeButton();
    } else {
      this._showInputError();
      this._disableButton();
    }
  }

  _showInputError = () => {
    this._errorInputContainer = this._fromElement.querySelector(`#${this._inputSelector.id}-error`);
    this._inputSelector.classList.add(this._inputErrorClass);
    this._errorInputContainer.textContent = this._inputSelector.validationMessage;
  }

  _hideInputError = () => {
    this._errorInputContainer = this._fromElement.querySelector(`#${this._inputSelector.id}-error`);
    this._inputSelector.classList.remove(this._inputErrorClass);
    this._errorInputContainer.textContent = '';
  }

  //_hasInvalidInput = (formInputs) => {
  //  return formInputs.some(item => !item.validity.valid);
  //}

  _activeButton = () => {
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    this._submitButton.classList.add(this._inactiveButtonClass);
    this._submitButton.setAttribute('disabled', true);
  }

  _disableButton = () => {
    this._submitButton = this._formElement.querySelector(this._submitButtonSelector);
    this._submitButton.classList.remove(this._inactiveButtonClass);
    this._submitButton.removeAttribute('disabled', true);
  }

}

export default FormValidator;

