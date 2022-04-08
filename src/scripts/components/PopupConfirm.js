import Popup from "./Popup.js";

export default class PopupConfirm extends Popup {
    constructor(popupSelector, popupSubmit) {
        super(popupSelector);
        this._popupSubmit = popupSubmit;
        this._button = this._popup.querySelector('.popup__button');
    }

    setEventListeners() {
        super.setEventListeners();
        
        this._button.addEventListener('click', (evt) => {
            this._popupSubmit()});
    }

    changeSubmit(newSubmit) {
        this._popupSubmit = newSubmit;
    }
}