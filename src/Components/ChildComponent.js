import React from 'react'

export const ChildComponent = ({ name }) => {
    return (
        <div className='component'>
            <span>Здравствуй, {name}! Текущий счетчик: </span>
        </div>
    )
}
