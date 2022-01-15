export default class Card {
    constructor (data, selector, handleCardClick) {
        this._selector = selector;
        this.data = data;
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
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick();
        });
        this._cardLike.addEventListener('click', () => {
            this._likeClick();
        });
        this._element.querySelector('.element__bin').addEventListener('click', () => {
            this._element.remove();
        });
    }

    _likeClick () {
        this._cardLike.classList.toggle('element__like_active');
    }

    generate () {
        this._cardImage = this._element.querySelector('.element__image');
        this._cardLike = this._element.querySelector('.element__like');
        this._getElementTemplate();
        this._setEventListeners();
        this._cardImage.src = this.data.link;
        this._cardImage.alt = this.data.name;
        this._element.querySelector('.element__title').textContent = this.data.name;

        return this._element;
    }
}

