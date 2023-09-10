import React, { useState, useEffect } from 'react'
import { Button } from './Button';

export const LifeCycleComponentFunc = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log('функциональный, componentDidMount');
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
