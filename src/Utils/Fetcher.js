export default class Fetcher {
    constructor(type) {
        this.#email = 'example@example.com';
        this.#password = '1Sq_22qw';
        this.#URL = "https://todo-redev.herokuapp.com/api/";
        this.token = localStorage.getItem('token');
        this.type = type;
    }

    #password;
    #email;
    #URL

    login = async () => {
        const body = {
            email: this.#email,
            password: this.#password,
        }
        try {
            this.token = (await this.#fetcher(this.#URL + 'auth/login/', this.#parametrs('POST', body))).token;
            localStorage.setItem('token', this.token);
            this.getData();
        }
        catch (error) {
            console.log(error)
        }
    }

    getData = async () => {
        try {
            console.log(this.type, await this.#fetcher(this.#URL + 'todos/', this.#parametrs('GET',)));
        }
        catch (error) {
            console.log(error);
        }
    }

    #parametrs = (method, body) => {
        return {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.token}`,
            },
            body: JSON.stringify(body)
        }
    }

    #fetcher = async (URL, parametrs) => {
        try {
            return (await fetch(URL, parametrs)).json();
        }
        catch (error) {
            console.log(error);
        }
    }
}