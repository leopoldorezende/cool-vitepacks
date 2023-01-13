import React from 'react'

export const Button = () => {
    const onClick = React.useCallback(() => {
        console.log('Vite + React + Typescript + TailwindCSS')
    }, [])
  return (
    <button onClick={onClick} className='bg-blue500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded '>Vite is better than webpack</button>
  )
}
