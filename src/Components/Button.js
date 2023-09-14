import React, { useContext } from 'react';
import { Theme } from '../Utils/ThemeContext';

export const Button = ({ title, cb, color = '#00c800', datavalue }) => {
    const theme = useContext(Theme);
    const buttonColor = theme.theme === 'light' ? color : '#3283a8'; // для темной темы
    return (
        <button className={`rounded px-5 mx-1 break-words bg-opacity-20 border-2`}
            style={
                {
                    border: `2px solid ${buttonColor}`,
                    backgroundColor: `${buttonColor}33`,
                    minWidth: '140px',
                    // maxWidth: '170px',
                    minHeight: '40px'
                }
            }
            onClick={cb} data-value={datavalue}>{title}</button>
    )
}
