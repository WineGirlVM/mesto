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

function changeName() {

}

function changeAbout() {
    
}