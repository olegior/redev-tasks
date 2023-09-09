import React, { useState } from 'react'
import { Button } from './Button';

export const Counter = ({ buttons = [], row, children }) => {
    const [counter, setCounter] = useState(0);
    const handleButtonClick = (action) => {
        // eslint-disable-next-line default-case
        switch (action) {
            case -1:
            case 1: {
                if (counter + action >= 0)
                    setCounter(prev => prev + action)
                break;
            }
            case 0: {
                setCounter(0)
                break;
            }
            case 2: {
                setCounter(Math.floor(Math.random() * 10 + 1))
            }
        }
    }
    return (
        <div className={`component ${row && 'row'} items-center`}>
            <div className='flex flex-row justify-between items-center'>
                {children}
                <span>{counter}</span>
            </div>
            <div className='flex justify-evenly'>
                {buttons.map(({ title, action }) => <Button title={title} key={title} cb={() => handleButtonClick(action)} />)}
            </div>
        </div>
    )
}
