import React, { useState } from 'react'

export const ThemeSwitcher = ({ theme, switchTheme }) => {
    const [checked, setChecked] = useState(false);
    const handleCheked = () => {
        setChecked(prev => !prev);
        switchTheme();
    }



    return (
        <div className='component'>
            <span className='text-9xl mb-10'>{theme === 'dark' ? '🌚' : '🌝'}</span>
            <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value={checked} className="sr-only peer" onChange={handleCheked} />
                <div className="w-14 h-7 bg-gray-500 peer-focus:outline-none  rounded-full peer dark:bg-orange-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-slate-400"></div>
                <span className="ml-3">Переключить тему</span>
            </label>
        </div>
    )
}
