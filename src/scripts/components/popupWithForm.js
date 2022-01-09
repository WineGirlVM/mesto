import Popup from "./popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, popupSubmit) {
        super(popupSelector);
        this.popupSubmit = popupSubmit;
    }

    _getInputValues() {
        const info = {
            Name: this._selector.querySelector('.popup__input_info_name').value,
            About: this._selector.querySelector('.popup__input_info_about').value,
        }
        return info;
    }

    setEventListeners() {
        super.setEventListeners();

        this._selector.querySelector('.popup__form').addEventListener('submit', this.popupSubmit);
    }

    close() {
        super.close();

        this._selector.querySelectorAll('.popup__input').forEach((input) => {
            input.value = '';
        })
    }
}