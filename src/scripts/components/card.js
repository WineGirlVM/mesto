export default class Card {
    constructor (data, selector, handleCardClick) {
        this._selector = selector;
        this.data = data;
        this._popup = document.querySelector('.popup_card-image');
        this._handleCardClick = handleCardClick;
    }

    _getElementTemplate () {
        const elementTemplate = document
            .querySelector(this._selector)
            .content
            .querySelector('.element')
            .cloneNode(true);

        this._element = elementTemplate;
        return this._element;
    }

    _setEventListeners () {
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._handleCardClick();
        });
        this._element.querySelector('.element__like').addEventListener('click', () => {
            this._likeClick();
        });
        this._element.querySelector('.element__bin').addEventListener('click', () => {
            this._element.remove();
        });
    }

    _likeClick () {
        this._element.querySelector('.element__like').classList.toggle('element__like_active');
    }

    generate () {
        this._getElementTemplate();
        this._setEventListeners();
        this._element.querySelector('.element__image').src = this.data.link;
        this._element.querySelector('.element__image').alt = this.data.name;
        this._element.querySelector('.element__title').textContent = this.data.name;

        return this._element;
    }
}

