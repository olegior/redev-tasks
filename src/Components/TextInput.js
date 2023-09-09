import React, { useState } from 'react'

export const TextInput = () => {
    const [textInputValue, setTextInputValue] = useState('');
    return (
        <div className='component'>
            <input className={`border-gray-300 border-2 rounded w-full text-center`}
                type="text" name="textInput" id="textInput"
                placeholder='введите текст, он отобразится ниже'
                onChange={(e) => setTextInputValue(e.target.value)} />

            <label htmlFor="textInput" className=''>
                {textInputValue}
            </label>

        </div>
    )
}
