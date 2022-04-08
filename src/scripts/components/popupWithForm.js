import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, popupSubmit) {
        super(popupSelector);
        this._popupSubmit = popupSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputList = this._form.querySelectorAll('.popup__input');
        this._button = document.querySelector('.popup__button');
    }


    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            this._popupSubmit()});
    }

    
    
    close() {
        super.close();

        this._form.reset();
    }

    isLoadingMessage(isLoading) {
        if (isLoading === true) {
          this._button.textContent = 'Сохранение...';
        } else {
          this._button.textContent = 'Сохранить';
        }
      }
}