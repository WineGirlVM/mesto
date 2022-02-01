import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, popupSubmit) {
        super(popupSelector);
        this._popupSubmit = popupSubmit;
        this._form = this._popup.querySelector('.popup__form');
        this._inputNameList = this._form.querySelectorAll('.popup__input_info_name');
        this._inputAboutList = this._form.querySelectorAll('.popup__input_info_about');
    }

    _getInputValues() {
        this._formValues = {};
        this._inputNameList.forEach(input => {
            this._formValues.name = input.value;
          });
        this._inputAboutList.forEach(input => {
            this._formValues.info = input.value;
        });
        return this._formValues;
    }

    setEventListeners() {
        super.setEventListeners();

        this._form.addEventListener('submit', (evt) => {
            this._popupSubmit(this._getInputValues())});
    }

    close() {
        super.close();

        this._form.reset();
    }
}