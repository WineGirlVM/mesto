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
  
function openPopup(popupElement) { //открытие попапа универсальное
    popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', closeEsc); //обработчик добавляется и удаляется
}
  
function closePopup(popupElement) { //закрытие попапа универсальное
    popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeEsc);
}

export { openPopup, closePopup, closeEsc, closeIcon, closeOverlay}