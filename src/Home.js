
import { React, useContext } from "react";
// import { Link } from "react-router-dom";
import { DarkModeContext } from './DarkModeContext';
import Card from "./Card";
import { Link } from "react-router-dom";






const Home = () => {

  const { darkMode } = useContext(DarkModeContext);






  return (
    <>

      <div className="container-fluid nav_bg ">
        <div className={darkMode ? 'bg-dark-primary' : 'bg-blue-300'}>
          <div className="col-10 mx-auto">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto">
                <div className={` text-center mb-16`}>

                  <h1 className={`sm:text-3xl text-2xl font-medium text-center title-font  my-4 ${darkMode ? 'text-white' : ' text-purple-800'}`}>Welcome to the era of Technology <ion-icon name="heart-outline"></ion-icon> </h1>
                  <p className={`text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto italic ${darkMode ? 'text-white' : 'text-gray'} `}>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
                </div>

                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">


                  <Card des="HTML Course for beginners" />
                  <Card des="CSS Course for beginners" />
                  <Card des="JavaScript Course for beginners" />
                  <Card des="React Course for beginners" />
                  <Card des="Nextjs Course for beginners" />
                  <Card des="Python Course for beginners" />


                </div>
                <button className="flex mx-auto mt-16 text-white bg-purple-800 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg"><Link to="/contact">Get Started</Link></button>
              </div>
            </section>

          </div>
        </div>


      </div>


    </>
  )


}
export default Home;