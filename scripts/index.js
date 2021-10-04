let main = document.querySelector('.main');
let popup = main.querySelector('.popup');
let profile = main.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
let popupForm = popup.querySelector('.popup__form');
let popupIcon = popup.querySelector('.popup__icon');
let inputName = popupForm.querySelector('.popup__input_info_name');
let inputAbout = popupForm.querySelector('.popup__input_info_about');
let profileName = profile.querySelector('.profile__name');
let profileAbout = profile.querySelector('.profile__about');


function openPopup() {
    popup.classList.add('popup_display');
    inputName.setAttribute('placeholder', profileName.textContent);
    inputAbout.setAttribute('placeholder', profileAbout.textContent);
    editButton.classList.add('profile__edit-button_active');
}

function closePopup() {
    popup.classList.remove('popup_display');
    editButton.classList.remove('profile__edit-button_active');
}

function popupSubmitHandler (evt) {
    evt.preventDefault();
    if (inputName.value.length > 0) {
        profileName.textContent = inputName.value;
    };
    if (inputAbout.value.length >0) {
        profileAbout.textContent = inputAbout.value;
    };
    closePopup();
}

popupForm.addEventListener('submit', popupSubmitHandler);
editButton.addEventListener('click', openPopup);
popupIcon.addEventListener('click', closePopup);