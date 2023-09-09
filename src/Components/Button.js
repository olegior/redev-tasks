import React from 'react'

export const Button = ({ title, cb, color = '0,200,0' }) => {
    return (
        <button className={`rounded px-5 mx-1 break-words`}
            style={
                {
                    border: `2px solid rgb(${color})`,
                    backgroundColor: `rgba(${color},0.2)`,
                    minWidth: '140px',
                    maxWidth: '160px',
                    minHeight: '40px'
                }
            }
            onClick={cb}>{title}</button>
    )
}
