const validObj = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_inactive',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  };

const errorRemove = (formElement) => {
    const errorElements = Array.from(formElement.querySelectorAll('.popup__input-error'));
    errorElements.forEach((errorElement) => {
        errorElement.textContent = "";
    });
    const errorInputs = Array.from(formElement.querySelectorAll('.popup__input'));
    errorInputs.forEach((errorInput) => {
        errorInput.classList.remove('popup__input_type_error');
        errorInput.textContent = "";
    })
};

const showError = (formElement, inputElement, errorMessage, objectConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(objectConfig.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(objectConfig.errorClass);
};

const hideError = (formElement, inputElement, objectConfig) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(objectConfig.inputErrorClass);
    errorElement.classList.remove(objectConfig.errorClass);
    errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, objectConfig) => {
    if (!inputElement.validity.valid) {
        showError(formElement, inputElement, inputElement.validationMessage, objectConfig);
    } else {
        hideError(formElement, inputElement, objectConfig);
    };
};

const toggleButtonState = (isActive, buttonElement, objectConfig) => {
    if (isActive) {
        buttonElement.classList.add(objectConfig.inactiveButtonClass);
        buttonElement.disabled = true;
    } else {
        buttonElement.classList.remove(objectConfig.inactiveButtonClass);
        buttonElement.disabled = false;
    };
};

const setEventListeners = (formElement, objectConfig) => {
    const inputList = Array.from(formElement.querySelectorAll(objectConfig.inputSelector));
    const buttonElement = formElement.querySelector(objectConfig.submitButtonSelector);
    toggleButtonState(hasInvalidInput(inputList), buttonElement, objectConfig);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(formElement, inputElement, objectConfig);
            toggleButtonState(hasInvalidInput(inputList), buttonElement, objectConfig);
        });
    });
    
};

const enableValidation = (objectConfig) => {
    const formList = Array.from(document.querySelectorAll(objectConfig.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function(evt) {
            evt.preventDefault();
        });

        setEventListeners(formElement, objectConfig);
    });
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
};



