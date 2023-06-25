
import { React, useContext } from "react";

import { DarkModeContext } from './DarkModeContext';
import SerC from "./SerC";


const Service = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className={darkMode ? 'bg-dark-primary' : 'bg-blue-300'}>
          <div className="col-10 mx-auto">
            <div className="container px-5 py-10 mx-auto">
              <div className="text-center mb-">

                <h1 className={`sm:text-3xl text-2xl font-medium text-center title-font  my-4 ${darkMode ? 'text-white' : ' text-purple-800'}`}>We Prvide the Best Among All </h1>
                <p className={`text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto italic ${darkMode ? 'text-white' : 'text-gray'} `}>Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug.</p>
              </div>
            </div>


            <section className="text-gray-600 body-font">

              <div className="container px-5 py-6 mx-auto">
                <div className="flex flex-wrap -m-4">




                  <SerC source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTHjnSrUtYC6kbjj5YvAhI4WPKA5rl2clZw&usqp=CAU" tag="HTML" stag="Learn with us" price="999Rs"
                  />
                  <SerC source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWN9nclw2IBn7w-98luIU735KANkCRDQd2ueYGSYwwVc_0s7kXgGGN_Av8F0lWJMvolII&usqp=CAU" tag="CSS" stag="Learn with us" price="999Rs" />
                  <SerC source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX0R0cs4J7DWz5IL0__wbmyPpred_mkx4lnBFlMQy5WEATWW5y96viuIa0gmqJ-ifu9NI&usqp=CAU" tag="JAVA" stag="Learn with us" price="999Rs" />
                  <SerC source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxQ6BQJg8Za40XJeMvUlslL88vD1dRPVlxqpdoIRmeUTH2IubUDVQgdCR5dQieTNUsdt4&usqp=CAU" tag="PYTHON" stag="Learn with us" price="999Rs" />
                  <SerC source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5eD6HIKct5KWqwDpRv58oAyr6EqI2JMzs03rs40IwOS0eBHuicNgwPZgsaIkFPfxjPmw&usqp=CAU" tag="REACT" stag="Learn with us" price="999Rs" />
                  <SerC source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1OOFN2GWCAXjFif7dX_uI46S2OcApxVRn7X_KnfV6vLeMrhFX3YeBfHoeC9HhOjzfr90&usqp=CAU" tag="C" stag="Learn with us" price="999Rs" />
                  <SerC source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_jQIVcqX_11S8cCv72SY8AxEJcKv7Am0MKb3j8rmxRG1CMjCRuIClBZ2YOSy7MpyDqGk&usqp=CAU" tag="NEXTJS" stag="Learn with us" price="999Rs" />
                  <SerC source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKwexZ5SV2n0ydDVllfwKw9dign_SRtcp092qopUMoWndnFV3hYr79UOgnwW4o8ki3nMQ&usqp=CAU" tag="COBOL" stag="Learn with us" price="999Rs" />


                </div>
              </div>
            </section>


          </div>
        </div>


      </div>
    </>
  )


}
export default Service;