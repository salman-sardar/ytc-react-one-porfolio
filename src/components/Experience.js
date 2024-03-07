import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import node from '../assets/node.png'
import next from '../assets/nextjs.png'
import graphal from '../assets/graphql.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {

    const exp = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 4,
            src: react,
            title: 'Reat',
            style: 'shadow-blue-500'
        },
        {
            id: 5,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-500'
        },
        {
            id: 6,
            src: next,
            title: 'Next JS',
            style: 'shadow-white'
        },
        {
            id: 7,
            src: graphal,
            title: 'Graphal',
            style: 'shadow-pink-500'
        },
        {
            id: 8,
            src: github,
            title: 'Github',
            style: 'shadow-gray-500'
        },
    ]
    return (
        <div className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
            <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div>
                    <p className='text-4xl border-b-4 border-gray-500 p-2 inline'>Experience</p>
                    <p className='py-6'>These are technologies I'he worked with</p>
                </div>

                <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {exp.map(({ id, src, title, style }) => (
                        <div key={id} className={` shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                            <img src={src} className='w-20 mx-auto' />
                            <p className=' mt-4'>{title}</p>
                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default Experience