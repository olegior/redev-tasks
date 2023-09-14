import React, { useState } from 'react'

export const ColorfulComponent = ({ Component, title }) => {
  const [color, setColor] = useState();
  const randomColor = () => {
    // const color = [];
    // for (let i = 0; i < 3; i++) {
    //   color.push(Math.floor(Math.random() * 257));
    // }
    // return color.join(',')
    return `#${(Math.floor(Math.random() * 16777215).toString(16))}`;
  }

  return (
    <div className='component'>
      <div className='flex justify-center'>
        {<Component title={title} color={color} cb={() => setColor(randomColor())} />}
      </div>
    </div>
  )
}
