import React, { Component } from 'react'
import { Button } from './Button';

const URL = "https://todo-redev.herokuapp.com/api/";

export default class LifeCycleComponent extends Component {
    state = {
        count: 0,
        isAuthorized: localStorage.getItem('token') ? true : false,
    }

    fetcher = async (URL, parametrs) => {
        const response = await fetch(URL, parametrs);
        return response.json();
    }

    parametrs = (method, body) => {
        return {
            method: method,
            headers: {
                "Content-Type": "application/json",
                "Authorization": !this.isAuthorized ? `Bearer ${localStorage.getItem('token')}` : undefined
            },
            body: JSON.stringify(body)
        }
    }

    login = async () => {
        const body = {
            email: "example@example.com",
            password: "1Sq_22qw",
        }
        try {
            localStorage.setItem('token', (await this.fetcher(URL + 'auth/login/', this.parametrs('post', body))).token);
            this.getData();
        }
        catch (error) {
            console.log(error)
        }
    }

    getData = async () => {
        try {
            console.log(await this.fetcher(URL + 'todos/', this.parametrs('GET',)));
        }
        catch (error) {
            console.log(error);
            this.login();
        }
    }

    componentDidMount() {
        if (!this.state.isAuthorized) {
            this.login();
        }
        this.getData();
        console.log('классовый, componentDidMount');
    }

    componentDidUpdate() {
        console.log('классовый, componentDidUpdate');
        console.log('классовый, счетчик', this.state.count);
    }

    shouldComponentUpdate(nextProp, nextState) {
        if (nextState.count % 2 === 0)
            return true;
        return false;
    }

    componentWillUnmount() {
        console.log('классовый, componentWillUnmount');
    }

    render() {
        return (
            <div className='flex justify-center mt-5'>
                <Button title={'class'} cb={() => this.setState(({ count }) => ({ count: count + 1 }))} />
            </div>
        )
    }
}
