import Detalle from '../../assets/imgs/Detalle.png'
import Landing1 from '../../assets/imgs/Landing1.png'
import Landing2 from '../../assets/imgs/Landing2.png'
import { ValuesBox } from '../../components/ValuesBox/ValuesBox'
import { Button } from '../../components'
import React from 'react'
import { Link } from 'react-router-dom'

export function Landing(){
    return(
      <>
        <section className='w-screen h-fit flex flex-col pt-10 cell:pb-0'>
            <section className='w-screen h-fit flex flex-row pb-16 cell:pb-32'>
              <article className='cell:pl-10 w-full cell:w-1/2 pt-28'>
                <div className='w-full cell:w-3/4 p-10 '>
                  <h1 className='cell:text-left text-center font-extrabold text-2xl cell:text-5xl'>We transform <span className='text-[#BE7DDD]'>ideas</span>  in extraordinary digital <br /><span className='text-[#BE7DDD]'>experiences</span></h1>
                </div>
                <main className='w-full text-xl cell:w-4/5 cell:text-3xl px-8 cell:p-10'>
                  <p className='cell:text-left text-base text-center font-semibold'>Our digital portfolio project brings together the expertise of a web programmer, digital and traditional illustrator, 3D modeler, and UI designer.</p>
                </main>
                <div className='cell:pl-10 flex flex-col items-center cell:items-start mt-10 cell:mt-0'>
                  <p className='w-fit cell:text-left text-center cell:text-xl font-semibold bg-gradient-to-r from-[#BE7DDD] to-white text-transparent bg-clip-text'>Let us introduce oursleves...</p>
                  <Link to="/whoweare">
                  <Button className="cell:mt-10 text-lg font-semibold w-2/4 rounded-3xl px-20" type="button" title="TAKE ME &nbsp; &nbsp;⟶"></Button>  
                  </Link>
                </div>      
              </article>
              <section className='w-5/12 pt-8 hidden cell:flex'>
                <img className="w-full" src={Detalle} alt="" />
              </section>
            </section>
            <article className='w-screen h-fit flex flex-col items-center justify-center pb-20'>
              <header className='w-full cell:w-1/3 p-10 font-extrabold flex justify-center'>
                <h1 className='border-b-8 border-[#BE7DDD] w-fit text-3xl cell:text-6xl'>Meet <span className='text-[#BE7DDD]'>us</span></h1>
              </header>
              <p className=' cell:w-1/2	w-full px-4 cell:px-0 text-xl cell:text-2xl font-light'>Meet Isaac Calle Cardozo and Juan David Valencia, two pillars at Paradox. Isaac brings technical prowess, with a deep understanding of web programming, while Juan David excels in 3D modeling. Together, we make your digital dreams a reality.</p>
            </article>
            <section className='w-screen h-fit flex flex-row cell:pl-20 pt-20 pr-20'>
              <section className='cell:w-1/2 w-full'>
                  <article>
                      <header className='cell:w-screen items-center justify-center'>
                            <h1 className="font-extrabold bg-gradient-to-r from-[#BE7DDD] text-3xl cell:text-6xl to-white text-transparent bg-clip-text w-full cell:w-fit border-b-8 border-solid bg-clip-border-box">
                              Our mission
                            </h1>
                      </header>
                      <main className='cell:w-9/12 w-full pl-2 cell:pl-0'>
                        <p className='text-xl cell:text-2xl font-light text-left pt-10'>We blend cutting-edge tech with artistic innovation to craft captivating digital experiences. Our diverse team pushes creative boundaries, exceeding client expectations with high-impact digital solutions.</p>
                      </main>
                  </article>
              </section>
              <section className='cell:w-1/2 items-center justify-center'>
                <img className="w-[70%] filter grayscale hidden cell:flex " src={Landing1} alt="" />
              </section>
            </section>
            <section className='w-screen h-fit flex flex-row pl-20 pt-20 cell:pr-20 pb-10 cell:pb-20'>
            <section className='cell:w-1/2 flex items-start justify-end'>
                <img className="w-[70%] filter grayscale hidden cell:flex" src={Landing2} alt="" />
              </section>
              <section className='w-full cell:w-1/2'>
                  <article className=' flex flex-col items-end'>
                      <header>
                            <h1 className="font-extrabold bg-gradient-to-r from-[#BE7DDD] to-white text-transparent bg-clip-text w-full cell:w-fit border-b-8 border-solid bg-clip-border-box text-3xl cell:text-6xl">
                              Our vision
                            </h1>
                      </header>
                      <main className='w-full cell:w-9/12 pr-2 cell:pr-0'>
                        <p className='text-xl cell:text-2xl  font-light text-right pt-10'>At Paradox, we pioneer innovative digital solutions that blend technology and creativity, setting new industry standards and empowering clients to achieve their visions.</p>
                      </main>
                  </article>
              </section>
              
            </section>
            <article className='w-screen h-fit flex flex-col items-center justify-center pt-10'>
              <header className='w-full cell:w-2/6 p-10 font-extrabold flex justify-center'>
                <h1 className='border-b-8 border-[#BE7DDD] w-fit text-3xl cell:text-6xl'>Our  <span className='text-[#BE7DDD]'>Values</span></h1>
              </header>
              <p className='cell:w-1/2	w-full px-4 cell:px-0 text-xl cell:text-2xl font-light'>
                Our success is fueled by our core values: creativity, collaboration, and excellence. These principles guide every project, ensuring we deliver unparalleled digital experiences.</p>
            </article>
            <div className='w-screen h-fit flex flex-col cell:flex-row pl-20 pt-20 pb-20 pr-20'>
                <ValuesBox number={"I"} title={"Creativity"} text={"Creativity is at our core. We think outside the box, innovate, and push boundaries to deliver unique digital experiences. From Juan David Valencia's illustrations to Isaac Calle Cardozo's coding, creativity inspires fresh ideas in all we do."}></ValuesBox>
                <ValuesBox number={"II"} title={"Collaboration"} text={"Teamwork is essential. We unite diverse talents to overcome challenges and achieve goals. For example, Juan Sebastián Silva and Juan Martín López combine design and 3D models, showcasing our mix of creativity and technical skill for great results."}></ValuesBox>
                <ValuesBox number={"III"} title={"Excellence"} text={"Excellence is our promise. We aim for the highest quality in every project. Whether it's Juan David Valencia's precise digital art or Isaac Calle Cardozo's perfect coding, we're dedicated to exceeding expectations and delivering exceptional results for our clients."}></ValuesBox>
            </div>
        </section>
      </>
    )
}
