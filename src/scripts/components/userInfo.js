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

    setUserInfo(formData) {
        this.name.textContent = formData.Name;
        this.info.textContent = formData.About;
    }
}