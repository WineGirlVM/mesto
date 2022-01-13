import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import {elements, inputNameCard, inputImage} from "./constants.js";
import { cardPopup, profilePopup, userData } from "../../pages/index.js";

export function popupSubmitHandler (evt) {
    evt.preventDefault();
    userData.setUserInfo();
    profilePopup.close();
}

export function popupSubmitCard (evt) {
    evt.preventDefault();
    const info = {
        name: inputNameCard.value,
        link: inputImage.value,
    };
    elements.prepend(createCard(info));
    cardPopup.close();
}

export function createCard(data) {
    const card = new Card(data, '#element-template', () => {
      const imagePopup = new PopupWithImage(data, '.popup_card-image');
      imagePopup.open();
    });
    const cardElement = card.generate();
    return cardElement;
}