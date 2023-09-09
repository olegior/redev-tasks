import React, { useState } from 'react'
import { Button } from './Button';

export const SiblingComponent = () => {
    const [text, setText] = useState('Какой-то текст');
    return (
        <div className='component row'>
            <span>{text}</span>
            <Button cb={() => setText('REDEV')} title={'сделать REDEV'} />
        </div>
    )
}
