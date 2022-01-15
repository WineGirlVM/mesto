export default class UserInfo {
    constructor({userNameSelector, userAboutSelector}) {
        this.name = document.querySelector(userNameSelector);
        this.about = document.querySelector(userAboutSelector);
    }

    getUserInfo() {
        const data = {
            userName: this.name.textContent,
            userAbout: this.about.textContent,
        }

        return data;
    }

    setUserInfo(name, about) {
        this.name.textContent = name; 
        this.about.textContent = about;
    }//"Все данные инпутов собирает метод _getInputValues 
    // из класса PopupWithForm и передает их в функцию сабмита  submitHandler. Вот их нужно использовать в index.js." - этот метод по заданию 
    // только собирает данные, но никуда их не передает
}