export default class UserInfo {
    constructor({userNameSelector, userAboutSelector}) {
        this.name = document.querySelector(userNameSelector).textContent;
        this.info = document.querySelector(userAboutSelector).textContent;
    }

    getUserInfo() {
        const data = {
            Name: this.name,
            Info: this.info,
        }
        return data;
    }

    setUserInfo(obj) {
        this.name = obj.name;
        this.info = obj.info;
        console.log(this.name, this.info);
    }
}