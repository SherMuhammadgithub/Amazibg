import { React, useContext } from 'react'
import { DarkModeContext } from './DarkModeContext';
import { Link } from 'react-router-dom';


function SerC(props) {
    const { darkMode } = useContext(DarkModeContext);
    return (
        <div className="lg:w-1/4 md:w-1/2 p-4 w-full ">
            <Link to="/contact" className="block relative  h-48 rounded overflow-hidden group">
                <img alt="ecommerce" className="object-cover object-center  hover:opacity-50 w-full h-full block " src={props.source} />

            </Link>
            <div className="mt-4">
                <h3 className={` text-xs tracking-widest title-font mb-1  ${darkMode ? 'text-white' : 'text-gray'}`}>{props.tag}</h3>
                <h2 className={`text-purple-800 title-font text-lg font-medium ${darkMode ? 'text-white' : 'text-purple-800'}`}>{props.stag}</h2>
                <div className={`mt-1 ${darkMode ? 'text-white' : 'text-gray'}`}>{props.price}</div>
            </div>
        </div>

    )
}

export default SerC
