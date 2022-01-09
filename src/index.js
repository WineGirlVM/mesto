import './index.css';
import Section from "./scripts/components/section.js";
import { initialCards, validObj } from "./scripts/utils/data.js";
import FormValidator from "./scripts/components/formValidator.js";
import {profileName, profileAbout, editButton, addButton,
    buttonProfile, buttonCard, 
    inputName, inputAbout} from "./scripts/utils/constants.js";
import PopupWithForm from "./scripts/components/popupWithForm.js";
import UserInfo from "./scripts/components/userInfo.js";
import { popupSubmitCard, popupSubmitHandler, createCard } from "./scripts/utils/utils.js";


const formValidProfile = new FormValidator(validObj, '.popup__form_profile');
const formValidCard = new FormValidator(validObj, '.popup__form_card');

const profilePopup = new PopupWithForm('.popup_profile', popupSubmitHandler);
const cardPopup = new PopupWithForm('.popup_card', popupSubmitCard);

const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        cardsList.addItem(createCard(item));
    },
}, '.elements');

const userData = new UserInfo({
    userNameSelector: '#name-input',
    userAboutSelector: '#about-input',
});

editButton.addEventListener('click', function() {
    formValidProfile.blockButton(buttonProfile, validObj);
    formValidProfile.errorRemove();
    profilePopup.open();
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
});

addButton.addEventListener('click', function() {
    formValidCard.blockButton(buttonCard, validObj);
    formValidCard.errorRemove();
    cardPopup.open();
});


cardsList.renderItems();
formValidProfile.enableValidation();
formValidCard.enableValidation();