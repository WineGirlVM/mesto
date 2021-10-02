let main = document.querySelector('.main');
let popup = main.querySelector('.popup');
let profile = main.querySelector('.profile');
let editButton = profile.querySelector('.profile__edit-button');
let popupIcon = popup.querySelector('.popup__icon');
let inputName = popup.querySelector('.popup__input_info_name');
let inputAbout = popup.querySelector('.popup__input_info_about');
let input = popup.querySelector('.popup__input');
let profileName = profile.querySelector('.profile__name');
let profileAbout = profile.querySelector('.profile__about');
let popupForm = popup.querySelector('.popup__form');

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
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup();
}

function submit () {
    if ((inputName.value.length = 0) || (inputAbout.value.length = 0)) {
        
    } else if (input.value.length = 0) {

    } else {
        popupSubmitHandler(evt);
    }
}

popupForm.addEventListener('submit', submit);
editButton.addEventListener('click', openPopup);
popupIcon.addEventListener('click', closePopup);