import { Card, initialCards } from "./card.js";
import { FormValidator, validObj } from "./formValidator.js";
const main = document.querySelector('.main');
const profile = main.querySelector('.profile');
const elements = main.querySelector('.elements');
const popupCard = main.querySelector('.popup_card');
const popupProfile = main.querySelector('.popup_profile');
const popupCardImage = main.querySelector('.popup_card-image');
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

function closeEsc (evt) { //закрытие на кнопку
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup);
    } 
}

function closeOverlay () { //закрытие на оверлей
  const popups = Array.from(document.querySelectorAll('.popup'));
  popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
      if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
      };
    });
  });
}

function closeIcon () { //закрытие на крестик
  const closeIcons = Array.from(document.querySelectorAll('.popup__icon'));
  closeIcons.forEach((icon) => {
    icon.addEventListener('click', (evt) => {
      closePopup(evt.target.closest('.popup'));
    });
  });
}

function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
  document.addEventListener('keydown', closeEsc); //обработчик добавляется и удаляется
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeEsc);
}

function popupSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup(popupProfile);
}

function popupSubmitCard (evt) {
    evt.preventDefault();
    const data = {
        name: inputNameCard.value,
        link: inputImage.value,
    };
    const card = new Card(data, '#element-template');
    const cardElement = card.generate();
    inputNameCard.value = "";
    inputImage.value = "";
    elements.prepend(cardElement);
    closePopup(popupCard);
}

popupFormProfile.addEventListener('submit', popupSubmitHandler);

editButton.addEventListener('click', function() {
    formValidProfile.errorRemove(popupFormProfile, validObj);
    openPopup(popupProfile);
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
    
});

popupFormCard.addEventListener('submit', popupSubmitCard);

addButton.addEventListener('click', function() {
    formValidCard.blockButton(buttonCard, validObj);
    formValidCard.errorRemove(popupFormCard, validObj);
    openPopup(popupCard);
    
});

initialCards.forEach((item) => {
  const card = new Card(item, '#element-template');
  const cardElement = card.generate();

  elements.append(cardElement);
});

closeIcon(); //вызов функций закрытия попапов
closeOverlay();
formValidProfile.enableValidation();
formValidCard.enableValidation();