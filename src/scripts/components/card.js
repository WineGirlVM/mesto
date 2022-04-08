export default class Card {
    constructor (data, selector, handleCardClick, handleDelete, setLike, deleteLike) {
        this._selector = selector;
        this._id = data._id;
        this._name = data.name;
        this._link = data.link;
        this._data = data;
        this._handleCardClick = handleCardClick;
        this._handleDelete = handleDelete;
        this._setLike = setLike;
        this._deleteLike = deleteLike;
        
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

    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners () {
        this._cardImage = this._element.querySelector('.element__image');
        this._cardLike = this._element.querySelector('.element__like');
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick();
        });
        this._cardLike.addEventListener('click', () => {
            if (this._cardLike.classList.contains('element__like_active')) {
                this._cardLike.classList.remove('element__like_active');
                this._deleteLike(this._id);
            } else {
                this._cardLike.classList.add('element__like_active');
                this._setLike(this._id);
            }
        });
        this._element.querySelector('.element__bin').addEventListener('click', () => {
            this._handleDelete(this._id);
        });
    }

    numberOfLikes(data) {
        this._element.querySelector('.element__like_number').textContent = data.likes.length;
    }

    generate () {
        this._getElementTemplate();
        this._setEventListeners();

        this._cardImage.src = this._link;
        this._cardImage.alt = this._name;
        this._element.querySelector('.element__title').textContent = this._name;

        this.numberOfLikes(this._data);

        return this._element;
    }
}

