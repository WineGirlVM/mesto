export default class Popup {
    constructor (popupSelector) {
        this._selector = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }

    open() {
        this._selector.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
        this.setEventListeners();
    }

    close() {
        this._selector.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    

    setEventListeners() {
        this._selector.querySelector('.popup__icon').addEventListener('click', (evt) => {
                this.close(evt.target.closest('.popup'));
            });

        this._selector.addEventListener('click', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close(evt.target);
            };
        });
    }
}