const main = document.querySelector('.main');
const profile = main.querySelector('.profile');
const popupProfile = main.querySelector('.popup_profile');
const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button');
const popupFormProfile = popupProfile.querySelector('.popup__form_profile');
const inputName = popupFormProfile.querySelector('.popup__input_info_name');
const inputAbout = popupFormProfile.querySelector('.popup__input_info_about');

export {editButton, addButton, inputName, inputAbout}