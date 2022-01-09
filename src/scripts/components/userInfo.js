export default class UserInfo {
    constructor({userNameSelector, userAboutSelector}) {
        this.name = userNameSelector;
        this.about = userAboutSelector;
    }

    getUserInfo() {
        const data = {
            userName: document.querySelector(this.name).value,
            userAbout: document.querySelector(this.about).value,
        }

        return data;
    }

    setUserInfo() {
        document.querySelector('.profile__name').textContent = document.querySelector(this.name).value;
        document.querySelector('.profile__about').textContent = document.querySelector(this.about).value;
    }
}