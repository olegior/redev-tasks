import React from 'react'

export const Task = ({ children, title }) => {
    return (
        <div className='task'>
            <h3 className='border-b-2 border-gray-400'>{title}</h3>
            {children}
        </div>
    )
}
