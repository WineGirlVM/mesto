import Popup from "./popup.js";

export default class PopupWithImage extends Popup {
    constructor(data, popupSelector) {
        super(popupSelector);
        this.link = data.link;
        this.name = data.name;
        
    }

    open() {
        super.open();
        this._selector.querySelector('.popup__image').src = this.link;
        this._selector.querySelector('.popup__image').alt = this.name;
        this._selector.querySelector('.popup__title').textContent = this.name;
        
    }
}