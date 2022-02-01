import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this.img = this._popup.querySelector('.popup__image');
        this.title = this._popup.querySelector('.popup__title');
    }

    open(data) {
        super.open();
        this.img.src = data.link;
        this.img.alt = data.name;
        this.title.textContent = data.name;
        
    }
}