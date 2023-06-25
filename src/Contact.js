import { React, useContext } from "react";

import { DarkModeContext } from './DarkModeContext';
import FormC from "./FormC";
const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className={darkMode ? 'bg-dark-primary' : 'bg-blue-300'}>

          <div className="col-10 mx-auto">
            <FormC />
          </div>
        </div>


      </div>

    </>
  )



}
export default Contact;