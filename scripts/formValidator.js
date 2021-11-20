export class FormValidator {
    constructor (data, formSelector) {
        this._data = data;
        this.formSelector = formSelector;
        
        this._formElement = document.querySelector(formSelector);
        this._inputList = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));
        this._buttonElement = this._formElement.querySelector(this._data.submitButtonSelector);
    }

    errorRemove () {
            const errorElements = Array.from(this._formElement.querySelectorAll('.popup__input-error'));  //здесь удаляю текст ошибки
            errorElements.forEach((errorElement) => {
                errorElement.textContent = "";
            });
            const inputList = Array.from(this._formElement.querySelectorAll(this._data.inputSelector));  //здесь удаляю наполнение инпута
            inputList.forEach((inputElement) => {
                inputElement.textContent = "";
                inputElement.classList.remove(this._data.inputErrorClass);
            });
    }
        
    _showError (inputElement) {
            const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
            inputElement.classList.add(this._data.inputErrorClass);
            errorElement.textContent = inputElement.validationMessage;
            errorElement.classList.add(this._data.errorClass);
        }
        
    _hideError (inputElement) {
            const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
            inputElement.classList.remove(this._data.inputErrorClass);
            errorElement.classList.remove(this._data.errorClass);
            errorElement.textContent = "";
        }
        
    _checkInputValidity (inputElement) {
            if (!inputElement.validity.valid) {
                this._showError(inputElement);
            } else {
                this._hideError(inputElement);
            };
        }
        
    _toggleButtonState () {
            const isActive = this._inputList.some((inputElement) => {
                return !inputElement.validity.valid;
            })
            if (isActive) {
                this._buttonElement.classList.add(this._data.inactiveButtonClass);
                this._buttonElement.disabled = true;
            } else {
                this._buttonElement.classList.remove(this._data.inactiveButtonClass);
                this._buttonElement.disabled = false;
            };
        }

    blockButton (buttonElement) {
        buttonElement.classList.add(this._data.inactiveButtonClass);
        buttonElement.disabled = true;
    }
        
    _setEventListeners () {
            this._inputList.forEach((inputElement) => {
                inputElement.addEventListener('input', () => {
                    this._checkInputValidity(inputElement);
                    this._toggleButtonState();
                });
            });
        }
        
    enableValidation () {
        this._formElement.addEventListener('submit', function(evt) {
            evt.preventDefault();
        });
        this._setEventListeners();       
    }
}