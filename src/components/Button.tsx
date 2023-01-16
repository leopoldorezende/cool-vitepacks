import React from 'react'
import './index.css'

export const Button = () => {
    const onClick = React.useCallback(() => {
        alert('Vite + React + Typescript + TailwindCSS = Trem bom demais')
    }, [])
  return (
    <button onClick={onClick} className='bg-blue400 hover:bg-blue-500 hover:text-white font-bold py-2 px-4 rounded '>Leopoldo!</button>
  )
}