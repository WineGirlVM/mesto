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
const inputNameCard = popupFormCard.querySelector('#card-name');
const inputImage = popupFormCard.querySelector('#url');


export {elements, profileName, profileAbout, editButton, addButton, 
    buttonProfile, buttonCard, inputName, inputAbout, inputNameCard, inputImage}