import React from 'react'
import { Button } from './Button'

export const List = ({ data = [], cb }) => {
    return (
        <div className='component'>
            <ul>
                {data.map((e, i) => <li key={e + i} className='component row' data-value={e}>
                    <p className='break-words'>{e}</p>
                    <Button title={'!!!'} cb={cb} datavalue={i}/>
                </li>)}
            </ul>
        </div>
    )
}