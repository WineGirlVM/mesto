import './index.css';
import Section from "../scripts/components/Section.js";
import { initialCards, validObj } from "../scripts/utils/data.js";
import FormValidator from "../scripts/components/FormValidator.js";
import {profileName, profileAbout, editButton, addButton,
    inputName, inputAbout, elements, inputNameCard, inputImage} from "../scripts/utils/constants.js";
import PopupWithForm from "../scripts/components/PopupWithForm.js";
import UserInfo from "../scripts/components/UserInfo.js";
import Card from '../scripts/components/card';
import PopupWithImage from '../scripts/components/popupWithImage';



const formValidProfile = new FormValidator(validObj, '.popup__form_profile');
const formValidCard = new FormValidator(validObj, '.popup__form_card');
const userData = new UserInfo({
    userNameSelector: '.profile__name',
    userAboutSelector: '.profile__about',
});
const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        cardsList.addItem(createCard(item));
    },
}, '.elements');

const imagePopup = new PopupWithImage('.popup_card-image');

const profilePopup = new PopupWithForm('.popup_profile', (formData) => {
    userData.setUserInfo(formData); //да чтож ты не работаешь то тварь
    profilePopup.close();
});

const cardPopup = new PopupWithForm('.popup_card', (formData) => {
    formData.link = formData.info;
    cardsList.addItem(createCard(formData));
    cardPopup.close();
});





function createCard(data) {
    const card = new Card(data, '#element-template', () => {
      imagePopup.open(data);
    });
    const cardElement = card.generate();
    return cardElement;
}

editButton.addEventListener('click', function() {
    formValidProfile.blockButton();
    formValidProfile.removeError();
    profilePopup.open();
    const userInfo = userData.getUserInfo();
    inputName.value = userInfo.Name;
    inputAbout.value = userInfo.Info;
});

addButton.addEventListener('click', function() {
    formValidCard.blockButton();
    formValidCard.removeError();
    cardPopup.open();
});

cardsList.renderItems();
imagePopup.setEventListeners();
profilePopup.setEventListeners();
cardPopup.setEventListeners();

formValidProfile.enableValidation();
formValidCard.enableValidation();