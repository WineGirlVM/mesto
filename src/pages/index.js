import './index.css';
import { validObj } from "../scripts/utils/data.js";
import FormValidator from "../scripts/components/FormValidator.js";
import {editButton, addButton,
    userAboutInput, userInfo, userName, userNameInput, avatar,
    cardLinkInput, cardNameInput, avatarInput} from "../scripts/utils/constants.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import Card from '../scripts/components/card';
import PopupWithImage from '../scripts/components/popupWithImage';
import Api from '../scripts/components/Api';
import PopupConfirm from '../scripts/components/PopupConfirm';

const formValidProfile = new FormValidator(validObj, '.popup__form_profile');
const formValidCard = new FormValidator(validObj, '.popup__form_card');
const formValidAvatar = new FormValidator(validObj, '.popup__form_avatar');

const API = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-37',
    headers: {
        authorization: 'f7522915-3d31-4e92-9da6-af1629dc46de',
        'Content-Type': 'application/json'
    }
});

const imagePopup = new PopupWithImage('.popup_card-image');
const confirmPopup = new PopupConfirm('.popup_confirm');

const profilePopup = new PopupWithForm('.popup_profile', () => {
    profilePopup.isLoadingMessage(true);
    API.setUserInfo(userNameInput.value, userAboutInput.value)
        .then((data) => {
            userName.textContent = data.name;
            userInfo.textContent = data.about;
        })
        .finally(() => {
            profilePopup.isLoadingMessage(false);
        });
    profilePopup.close();
});

const cardPopup = new PopupWithForm('.popup_card', () => {
    cardPopup.isLoadingMessage(true);
    API.setNewCard(cardNameInput.value, cardLinkInput.value)
        .then((data) => {
            document.querySelector('.elements').prepend(createCard(data));
        })
        .finally(() => {
            cardPopup.isLoadingMessage(false);
        });
    cardPopup.close();
});

const avatarPopup = new PopupWithForm('.popup_avatar', () => {
    avatarPopup.isLoadingMessage(true);
    API.changeAvatar(avatarInput.value)
        .then((data) => {
            avatar.src = data.avatar;
        })
        .finally(() => {
            avatarPopup.isLoadingMessage(false);
        });
    avatarPopup.close();
});

export function createCard(data) {
    const card = new Card(data, '#element-template',
    () => {
      imagePopup.open(data);
    }, (id) => {
        confirmPopup.open();
		confirmPopup.changeSubmit(() => {
			API.deleteCard(id)
				.then(res => {
					card.deleteCard();
					confirmPopup.close()
				})
			});
    }, (id) => {
        API.setLike(id)
            .then((data) => {
                card.numberOfLikes(data);
            });
    }, (id) => {
        API.deleteLike(id)
            .then((data) => {
                card.numberOfLikes(data);
            });
    });
    const cardElement = card.generate();
    return cardElement;
}

editButton.addEventListener('click', function() {
    formValidProfile.blockButton();
    formValidProfile.removeError();
    profilePopup.open();
    
});

addButton.addEventListener('click', function() {
    formValidCard.blockButton();
    formValidCard.removeError();
    cardPopup.open();
});

avatar.addEventListener('click', () => {
    formValidAvatar.blockButton();
    formValidAvatar.removeError();
    avatarPopup.open();
})


imagePopup.setEventListeners();
profilePopup.setEventListeners();
cardPopup.setEventListeners();
confirmPopup.setEventListeners();
avatarPopup.setEventListeners();

formValidProfile.enableValidation();
formValidCard.enableValidation();
formValidAvatar.enableValidation();

API.getUserInfo()
    .then((data) => {
        userName.textContent = data.name;
        userInfo.textContent = data.about;
        avatar.src = data.avatar;
        userNameInput.value = data.name;
        userAboutInput.value = data.about;
    });
API.getCards();