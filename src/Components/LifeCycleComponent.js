import React, { Component } from 'react'
import { Button } from './Button';
import Fetcher from '../Utils/Fetcher.js'

export default class LifeCycleComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            // isAuthorized: !!localStorage.getItem('token'), вообще убрал
        };
        this.f = new Fetcher('Классовый');
    }

    componentDidMount() {
        this.f.login();
        console.log('классовый, componentDidMount');
    }

    componentDidUpdate() {
        console.log('классовый, componentDidUpdate');
        console.log('классовый, счетчик', this.state.count);
    }

    shouldComponentUpdate(nextProp, nextState) {
        // if (nextState.count % 2 === 0)
        //     return true;
        // return false;
        return nextState.count % 2 === 0;
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
