import React from 'react'
import { Button } from './Button'

export const List = ({ data = [], cb }) => {
    return (
        <div className='component'>
            <ul>
                {data.map((e,id) => <li key={e+id} className='component row' data-value={e}>
                    <p>{e}</p>
                    <Button title={'!!!'} cb={cb} />
                </li>)}
            </ul>
        </div>
    )
}