let main = document.querySelector('.main');
let popup = main.querySelector('.popup');
let profile = main.querySelector('.profile');
let editButton = profile.querySelector('.edit-button');
let popupIcon = popup.querySelector('.popup__icon');

function openPopup() {
    popup.setAttribute('style', 'display: block');
}

function closePopup() {
    popup.setAttribute('style', 'display: none');
}

editButton.addEventListener('click', openPopup);
popupIcon.addEventListener('click', closePopup);

let inputName = popup.querySelector('.popup__input-name');
let inputAbout = popup.querySelector('.popup__input-about');
let profileName = profile.querySelector('.profile__name');
let profileAbout = profile.querySelector('.profile__about');

inputName.setAttribute('placeholder', profileName.textContent);
inputAbout.setAttribute('placeholder', profileAbout.textContent);

let popupContainer = popup.querySelector('.popup__container');
let popupButton = popup.querySelector('.popup__button');


function popupSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
}

popupContainer.addEventListener('submit', popupSubmitHandler);
popupButton.addEventListener('click', popupSubmitHandler);
popupButton.addEventListener('click', closePopup);