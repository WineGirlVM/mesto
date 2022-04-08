const main = document.querySelector('.main');
const profile = main.querySelector('.profile');
const editButton = profile.querySelector('.profile__edit-button');
const addButton = profile.querySelector('.profile__add-button');
const avatar = document.getElementById('Avatar');
const userName = document.querySelector('.profile__name');
const userInfo = document.querySelector('.profile__about');
const cardNameInput = document.getElementById('card-name');
const cardLinkInput = document.getElementById('url');
const avatarInput = document.getElementById('AvatarUrl');
const userNameInput = document.getElementById('name-input');
const userAboutInput = document.getElementById('about-input');

export {editButton, addButton, avatar, userAboutInput, userInfo, userName, userNameInput, cardLinkInput, cardNameInput, avatarInput}