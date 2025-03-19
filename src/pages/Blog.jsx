import React from 'react'
import Card from '../components/Card'

const Contact = () => {
  return (
    <div>
         <div
        className={` text-green-400 border border-green-500 rounded-xl min-w-[1rem] px-2 py-1 mt-2`}
      >
        <p className={`m-1 text-xl tracking-widest text-center font-bold  text-green-400`}>
          Blog
        </p>
      </div>

      <div className='flex flex-col items-center justify-center mx-5'>
        <Card />
        <Card />
        <Card />
        <Card />

      </div>


    </div>
  )
}

export default Contact