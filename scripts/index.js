import { initialCards, validObj } from "./data.js";
import { openPopup, closeIcon, closeOverlay, closePopup } from "./utils.js";
import { Card } from "./card.js";
import { FormValidator } from "./formValidator.js";
const main = document.querySelector('.main');
const profile = main.querySelector('.profile');
const elements = main.querySelector('.elements');
const popupCard = main.querySelector('.popup_card');
const popupProfile = main.querySelector('.popup_profile');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');
const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button');
const buttonProfile = popupProfile.querySelector('.popup__button');
const buttonCard = popupCard.querySelector('.popup__button');
const popupFormProfile = popupProfile.querySelector('.popup__form_profile');
const popupFormCard = popupCard.querySelector('.popup__form_card');
const inputName = popupFormProfile.querySelector('.popup__input_info_name');
const inputAbout = popupFormProfile.querySelector('.popup__input_info_about');
const inputNameCard = popupFormCard.querySelector('.popup__input_info_name-card');
const inputImage = popupFormCard.querySelector('.popup__input_info_link');
const formValidProfile = new FormValidator(validObj, '.popup__form_profile');
const formValidCard = new FormValidator(validObj, '.popup__form_card');

function popupSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup(popupProfile);
}

function popupSubmitCard (evt) {
    evt.preventDefault();
    const info = {
        name: inputNameCard.value,
        link: inputImage.value,
    };
    inputNameCard.value = "";
    inputImage.value = "";
    elements.prepend(createCard(info));
    closePopup(popupCard);
}

function createCard(data) {
  const card = new Card(data, '#element-template');
  const cardElement = card.generate();
  return cardElement;
}

popupFormProfile.addEventListener('submit', popupSubmitHandler);
popupFormCard.addEventListener('submit', popupSubmitCard);

editButton.addEventListener('click', function() {
    formValidProfile.blockButton(buttonProfile, validObj);
    formValidProfile.errorRemove();
    openPopup(popupProfile);
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    
});

addButton.addEventListener('click', function() {
    formValidCard.blockButton(buttonCard, validObj);
    formValidCard.errorRemove();
    openPopup(popupCard);
    
});

initialCards.forEach((item) => {
  elements.append(createCard(item));
});

closeIcon(); //вызов функций закрытия попапов
closeOverlay();
formValidProfile.enableValidation();
formValidCard.enableValidation();