import React, { useState } from 'react'
import { Button } from './Button';

export const TextHide = () => {
    const [toShow, setToShow] = useState(true);
    return (
        <div className='component row'>
            <span>{toShow && 'рандомный текст'}</span>
            <Button title={toShow ? 'скрыть' : 'показать'} cb={() => setToShow(prev => !prev)} />
        </div>
    )
}
