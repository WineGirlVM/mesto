const main = document.querySelector('.main');
const popup = main.querySelector('.popup');
const profile = main.querySelector('.profile');
const elements = main.querySelector('.elements');
const popupCard = main.querySelector('.popup_card');
const popupProfile = main.querySelector('.popup_profile');
const profileName = profile.querySelector('.profile__name');
const profileAbout = profile.querySelector('.profile__about');
const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button');
const popupFormProfile = popupProfile.querySelector('.popup__form_profile');
const popupFormCard = popupCard.querySelector('.popup__form_card');
const popupIconProfile = popupProfile.querySelector('.popup__icon_profile');
const popupIconCard = popupCard.querySelector('.popup__icon_card');
const inputName = popupFormProfile.querySelector('.popup__input_info_name');
const inputAbout = popupFormProfile.querySelector('.popup__input_info_about');
const inputNameCard = popupFormCard.querySelector('.popup__input_info_name-card');
const inputImage = popupFormCard.querySelector('.popup__input_info_link');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

function openPopup(popupElement) {
    popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
    popupElement.classList.remove('popup_opened');
}

function createCard(data) {
    const elementTemplate = document.querySelector('#element-template').content;
    const element = elementTemplate.querySelector('.element').cloneNode(true);
    element.querySelector('.element__title').textContent = data.name;
    element.querySelector('.element__image').src = data.link;
    element.querySelector('.element__image').alt = data.name;
    element.querySelector('.element__like').addEventListener('click', function(evt) {
        const likeTarget = evt.target;
        likeTarget.classList.toggle('element__like_active');
    })
    return element;
}

initialCards.forEach(function(dataInitialsCard) {
    const newCard = createCard(dataInitialsCard);
    elements.append(newCard);
})

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
    }
    const newCard = createCard(data);
    inputNameCard.value = "";
    inputImage.value = "";
    elements.prepend(newCard);
    closePopup(popupCard);
}

popupFormProfile.addEventListener('submit', popupSubmitHandler);

editButton.addEventListener('click', function() {
    openPopup(popupProfile);
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
});

popupFormCard.addEventListener('submit', popupSubmitCard);

addButton.addEventListener('click', function() {
    openPopup(popupCard);
})

popupIconProfile.addEventListener('click', function() {
    closePopup(popupProfile);
});

popupIconCard.addEventListener('click', function() {
    closePopup(popupCard);
});





















/*inputName.setAttribute('placeholder', profileName.textContent);*/
/*идет в связке с атрибутом в функции открытия попапа. 
if (inputName.value.length > 0)*/