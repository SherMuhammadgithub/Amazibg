import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {


    return (

        <Link to="/contact" className="p-2 sm:w-1/2 w-full">
            <div className="bg-gray-100 rounded flex p-4 h-full items-center hover:bg-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="3" className="text-purple-800 w-6 h-6 flex-shrink-0 mr-4" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                </svg>
                <span className="title-font font-medium">{props.des}</span>
            </div>
        </Link>


    )
}

export default Card
