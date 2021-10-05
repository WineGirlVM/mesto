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
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}

/*вернуть добавление атрибута,
удобнее для пользователя.
inputName.setAttribute('placeholder', profileName.textContent);*/

function closePopup() {
    popup.classList.remove('popup_opened');
}

function popupSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    closePopup();
}
/*потом вернуть условия в функцию, 
при случайном нажатии на сохранить не возвращает пустые поля. 
if (inputName.value.length > 0)*/

popupForm.addEventListener('submit', popupSubmitHandler);
editButton.addEventListener('click', openPopup);
popupIcon.addEventListener('click', closePopup);