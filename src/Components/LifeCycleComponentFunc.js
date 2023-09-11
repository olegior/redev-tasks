import React, { useState, useEffect } from 'react'
import { Button } from './Button';
import Fetcher from '../Utils/Fetcher';

export const LifeCycleComponentFunc = () => {
    const [count, setCount] = useState(0);
    const f = new Fetcher('Функциональный');
    useEffect(() => {
        console.log('функциональный, componentDidMount');
        f.login();
        return () => console.log('функциональный, componentWillUnmount');
    }, []);

    useEffect(() => {
        if (count % 2 === 0) {
            console.log('функциональный, componentDidUpdate');
            console.log('функциональный, счетчик', count);
        }
    }, [count]);

    return (
        <div className='flex justify-center mt-5'>
            <Button title={'function'} cb={() => setCount(prev => prev + 1)} />
        </div>
    )
}
