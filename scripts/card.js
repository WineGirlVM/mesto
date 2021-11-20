export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

export class Card {
    constructor (data, selector) {
        this._selector = selector;
        this.data = data;
        this._popup = document.querySelector('.popup_card-image');
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

    _openImagePopup () {
        this._popup.querySelector('.popup__image').src = this._element.querySelector('.element__image').src;
        this._popup.querySelector('.popup__image').alt = this._element.querySelector('.element__title').alt;
        this._popup.querySelector('.popup__title').textContent = this._element.querySelector('.element__title').textContent;
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', (evt) => {
          if (evt.key === 'Escape') {
            this._popup.classList.remove('popup_opened');
          } 
        });
    }

    _setEventListeners () {
        this._element.querySelector('.element__image').addEventListener('click', () => {
            this._openImagePopup();
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


  