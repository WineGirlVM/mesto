import { createCard } from "../../pages";

export default class Api {
    constructor( { baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    _checkRes(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    }

    _checkErr(err) {
        console.log(err);
    }

    getUserInfo() {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'GET',
            headers: this.headers,
        })
        .then(this._checkRes)
        .catch(this._checkErr)
    }

    getCards() {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'GET',
            headers: this.headers,
        })
        .then(this._checkRes)
        .then((data) => {
            data.forEach((item) => {
                document.querySelector('.elements').prepend(createCard(item));
                this.numberOfLikes = document.querySelector('.element__like_number');
                this.numberOfLikes.textContent = item.likes.length;
                document.querySelector('.element__bin').remove();
            })
        })
        .catch(this._checkErr)
    }

    setUserInfo(name, about) {
        return fetch(`${this.baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                about: about
            })
        })
        .then(this._checkRes)
        .catch(this._checkErr)
    }

    setNewCard(name, link) {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
        .then(this._checkRes)
        .catch(this._checkErr)
    }

    deleteCard(id) {
        return fetch(`${this.baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this.headers,

        })
        .then(this._checkRes)
        .catch(this._checkErr)
    }

    setLike(id) {
        return fetch(`${this.baseUrl}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this.headers,
        })
        .then(this._checkRes)
        .catch(this._checkErr)
    }

    deleteLike(id) {
        return fetch(`${this.baseUrl}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this.headers,
        })
        .then(this._checkRes)
        .catch(this._checkErr)
    }

    changeAvatar(avatar) {
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                avatar: avatar,
            })
        })
        .then(this._checkRes)
        .catch(this._checkErr)
    }
}