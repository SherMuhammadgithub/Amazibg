
import { DarkModeContext } from './DarkModeContext';
import { React, useContext, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
function Darks() {
  const { toggleDarkMode } = useContext(DarkModeContext);
  const [Har, setHar] = useState(false);

  // Function to handle the onClick event
  const handleClick = () => {
    setHar(!Har);
  };

  return (
    <div onClick={toggleDarkMode} className='text-center ml-3 '>
      <FontAwesomeIcon
        icon={Har ? faMoon : faSun} style={{ color: "purple", margin: "0%" }}
        onClick={handleClick}
      />
    </div>
  )

}

export default Darks
