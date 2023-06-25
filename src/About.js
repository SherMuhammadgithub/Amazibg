
import { React, useContext } from "react";
import { DarkModeContext } from './DarkModeContext';
import { Link } from "react-router-dom";

const About = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
    
      <div className="container-fluid nav_bg">
        <div className={darkMode ? 'bg-dark-primary' : 'bg-blue-300'}>
          <div className="col-10 mx-auto">

            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-14 items-center justify-center flex-col">

                <img className="  spin mb-10  rounded-full md:h-48 w-32 h-32 md:w-48 object-cover " alt="hero" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7hsA4THu5yMJClLeQTThDoMFtMW_yg_JO5ZrSgm0tXushFSniFJhRDbVkqCBn0PLR7jA&usqp=CAU" />


                <div className="text-center lg:w-2/3 w-full">
                  <h1 className={`title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900  ${darkMode ? 'text-white' : ' text-purple-800'}`}>About Us </h1>
                  <div className="h-40 overflow-hidden mb-4">
                  <div className='h-full animate-scrolling'>
                  <p className={`mb-8 leading-relaxed text-justify  ${darkMode ? 'text-white' : 'text-gray'}`}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic rem aspernatur fuga expedita quam corporis asperiores quisquam optio? Voluptatibus unde excepturi cumque dolore molestiae, accusamus sit, eligendi autem architecto reprehenderit quia libero sequi possimus dignissimos consequatur quibusdam voluptatem delectus eius commodi rerum quo, natus aliquam. Atque nulla ratione dignissimos, aliquam a itaque inventore iste officiis nisi modi animi voluptatibus blanditiis enim quod sed esse dicta saepe minus, veniam quaerat suscipit. In itaque repellendus assumenda harum, aliquam, alias blanditiis libero, molestias odit earum cupiditate perferendis? Eos ex nemo quia? Suscipit, sed. Numquam veniam dolor accusamus mollitia similique fuga est sequi laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem pariatur commodi ab sed molestiae veniam quo consequatur quam, hic alias exercitationem omnis, veritatis illo dignissimos eius odio voluptatibus sunt animi officia amet. Dicta, nemo obcaecati? Ut provident quod impedit dolorum minima enim nostrum doloremque unde repellat nobis, omnis eius eos aperiam a animi autem, rerum reprehenderit atque, voluptas qui tempora inventore! Alias, rem dicta veniam dolor assumenda dolorum illum neque necessitatibus aliquid quaerat sequi nostrum nesciunt! Eius quae distinctio ipsam, eveniet voluptas ea quidem aspernatur animi repudiandae suscipit inventore libero id pariatur optio ut, architecto ipsum quos debitis fugiat. Mollitia. </p>
                  </div>
                  </div>
                  <div className="flex justify-center">
                    <button className="inline-flex text-white bg-purple-800 border-0 py-2 px-6 focus:outline-none hover:bg-purple-500 rounded text-lg"> <Link to="/contact">Get Started</Link></button>
                  </div>
                </div>
              </div>
            </section>


          </div>
        </div>


      </div>

    </>
  )


}
export default About;