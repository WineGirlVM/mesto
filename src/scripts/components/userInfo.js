export default class UserInfo {
    constructor({userNameSelector, userAboutSelector}) {
        this.name = document.querySelector(userNameSelector);
        this.info = document.querySelector(userAboutSelector);
    }

    getUserInfo() {
        const data = {
            Name: this.name.textContent,
            Info: this.info.textContent,
        }
        return data;
    }

    setUserInfo(obj) {
        this.name.textContent = obj.name;
        this.info.textContent = obj.info;
    }
}