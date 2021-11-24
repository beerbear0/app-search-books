class Api {
    constructor({baseurl, headers}) {
        this._baseUrl = baseurl;
        this._headers = headers;
    }
    // Обработка реаспонсов сервера 
    _handleResponse(res) {
        if(res.ok) {
            return res.json();
        }
        else {
            return Promise.reject(`Error: ${res.status}`);
        }
    }
    // Получение всех книг 
    getAllBooks () {
        return fetch(`${this._baseUrl}`, {
            method: 'GET',
            headers: this._headers
        })
        .then(this._handleResponse)
    }
}

export const api = new Api({
    baseurl: ' https://www.googleapis.com/books/v1/volumes',
    headers: {
        'Content-Type': 'application/json'
    }
})