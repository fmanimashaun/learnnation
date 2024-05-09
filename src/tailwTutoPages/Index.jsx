// import React from 'react'
import React , {useState} from 'react'
import './index.css';
import boy from '../assets/imgs/boy.png'
import man from '../assets/imgs/man.png'
import people from '../assets/imgs/people.png'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri'

const Menu = () => (
    <>
            <a href="#students" className='active:bg-white active:text-black '>Our Students</a>
            <a href="#testimonials" className='hover:opacity-90'>Testimonials</a>
            <a href="#contact" className='hover:opacity-90'>Contact Us</a>
    </>
  )
const Index = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
        <body className=' min-h-screen bg-slate-50 dark:bg-black dark:text-white'>
            <header className='bg-teal-700 text-white sticky top-0 z-10'>
                <section className='max-w-4xl mx-auto p-4 flex justify-between items-center'>
                    <h1 className='text-3xl font-medium'>
                        <a href="#hero">Acme Students</a>
                    </h1>
                    <div>
                        <button id='hambuger-button ' className='text-3xl md:hidden cursor-pointer  '>
                            {/* &#9776; */}
                             {/* if statement to tuggle between 3line and x line  */}
                             {toggleMenu ? <RiCloseLine color='#fff' size={27} onClick={()=> setToggleMenu(false)}/> : <RiMenu3Line color='#fff' size={27} onClick={()=> setToggleMenu(true)}/> }
                            {/* if statement to to add links tags  */}
                            {toggleMenu && ( <div className='mobileLinkHolderCon scale-up-center'> 
                            <div className='mobileLinkHolder'> 
                                <Menu />
                            </div> 
                             
                             </div>)}
                        </button>
                        
                        <nav className='hidden md:block  space-x-8 text-xl' aria-label='main'>
                            <a href="#students" className='hover:opacity-90'>Our Students</a>
                            <a href="#testimonials" className='hover:opacity-90'>Testimonials</a>
                            <a href="#contact" className='hover:opacity-90'>Contact Us</a>
                        </nav>
                    </div>
                </section>
                <section id="mobile-menu" className='absolute top-0 bg-black w-full text-5xl  flex-col justify-content-center origin-top animate-open-menu hidden'>
                    <button className='text-8xl self-end px-6'>
                        &times;
                    </button>
                    <nav className='flex flex-col min-h-screen items-center py-8' aria-label='mobile'>
                        <a href="#hero" className=' w-full text-center py-6 hover:opacity-90'>Home</a>
                        <a href="#students" className=' w-full text-center py-6 hover:opacity-90'>Our Students</a>
                        <a href="#testimonials" className=' w-full text-center py-6 hover:opacity-90'>Testimonials</a>
                        <a href="#contact" className=' w-full text-center py-6 hover:opacity-90'>Contact Us</a>
                        <a href="#cfooter" className=' w-full text-center py-6 hover:opacity-90'>Legal</a>
                    </nav>
                </section>
            </header>
            <main className=' max-w-4xl mx-auto'>
                <section id='hero' className='flex flex-col-reverse justify-content-center scroll-mt-40 sm:flex-row p-6 items-center gap-8 mb-12'>
                    <article className='sm:w-1/2'>
                        <h2 className=' max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white'>
                            We teach top nouch <span className='text-indigo-700 dark:text-indigo-300 '>technologies to our students</span> in our school....
                        </h2>
                        <p className='max-w-md text-2xl  mt-4 text-center sm:text-left'>
                            veritatis dolore ipsam cum! Ipsum, consequuntur!
                        </p>
                        <p className='max-w-md text-2xl  mt-4 text-center sm:text-left'>
                            ad cum veniam hic harum ipsum necessitatibus i e magni vitae voluptate natus?
                        </p>
                    </article>
                    <img src={boy} className='w-1/2' alt="" />
                </section>
                <hr className='mx-auto h-1 bg-black dark:bg-white w-1/2 ' />
                <section id='students' className='p-6 my-12 scroll-mt-20 '>
                    <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
                        Our Students
                    </h2>
                    <ul className=' list-none mx-auto my-12 flex justify-center flex-col sm:flex-row items-center gap-8 '>
                        <li className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl'>
                            <img src={man} className='w-1/2 mb-6' alt="" />
                            <h3 className='text-3xl text-center text-slate-900 dark:text-white'>
                                Explore
                            </h3>
                            <p className=' hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                                $
                            </p>
                            <p className='block sm:hidden  text-2xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                                Affordable Exploration 
                            </p>
                        </li>

                        <li className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl'>
                            <img src={people} className='w-1/2 mb-6' alt="" />
                            <h3 className='text-3xl text-center text-slate-900 dark:text-white'>
                                Explore
                            </h3>
                            <p className=' hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                                $
                            </p>
                            <p className='sm:hidden  text-2xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                                Affordable Exploration 
                            </p>
                        </li>
                        
                        <li className='w-2/3 sm:w-5/6 flex flex-col items-center border border-solid border-slate-900 dark:border-gray-100 bg-white dark:bg-black py-6 px-2 rounded-3xl shadow-xl'>
                            <img src={boy} className='w-1/2 mb-6' alt="" />
                            <h3 className='text-3xl text-center text-slate-900 dark:text-white'>
                                Explore
                            </h3>
                            <p className=' hidden sm:block text-3xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                                $
                            </p>
                            <p className='sm:hidden  text-2xl text-center mt-2 text-slate-500 dark:text-slate-400'>
                                Affordable Exploration 
                            </p>
                        </li>
                    </ul>
                </section>

                <hr className='mx-auto h-1 bg-black dark:bg-white w-1/2 ' />

                <section id='testimonials' className='p-6 my-12 scroll-mt-20'>
                    <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
                        Testimonials
                    </h2>
                    <figure className='my-12 '>
                        <blockquote className='bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative'>
                            <p className='text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-[&#9776;] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-black before:opacity-25 before:transform before:translate-x-2 before:translate-y-2   after:content-[&#9776;] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-black after:opacity-25 after:transform after:translate-x-2 after:translate-y-2 '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia hic asperiores a dolore, enim sed perferendis, deserunt, veniam atque voluptas provident sapiente rem voluptatem vitae magnam fuga earum ea eum.
                            </p>
                        </blockquote>
                        <figcaption className='italic text-xl sm:text-2xl text-right mt-2 text-slate-600 dark:text-slate-400 '>
                            &#8212;While E. Coyote, Genius
                         </figcaption>
                    </figure>

                    <figure className='my-12 '>
                        <blockquote className='bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative'>
                            <p className='text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400  '>
                                <p className='absolute text-9xl top-0 left-5'>'</p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia hic asperiores a dolore, enim sed perferendis, deserunt, veniam atque voluptas provident sapiente rem voluptatem vitae magnam fuga earum ea eum.
                                <p className='absolute text-9xl -bottom-20 right-5'>'</p>
                            </p>
                        </blockquote>
                        <figcaption className='italic text-xl sm:text-2xl text-right mt-2 text-slate-600 dark:text-slate-400 '>
                            &#8212;While E. Coyote, Genius
                         </figcaption>
                    </figure>

                    <figure className='my-12 '>
                        <blockquote className='bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative'>
                            <p className='text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-[&#9776;] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-black before:opacity-25 before:transform before:translate-x-2 before:translate-y-2   after:content-[&#9776;] after:font-serif after:absolute after:-bottom-20 after:right-0 after:text-9xl after:text-black after:opacity-25 after:transform after:translate-x-2 after:translate-y-2 '>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia hic asperiores a dolore, enim sed perferendis, deserunt, veniam atque voluptas provident sapiente rem voluptatem vitae magnam fuga earum ea eum.
                            </p>
                        </blockquote>
                        <figcaption className='italic text-xl sm:text-2xl text-right mt-2 text-slate-600 dark:text-slate-400 '>
                            &#8212;While E. Coyote, Genius
                         </figcaption>
                    </figure>
                </section>
                
                <hr className='mx-auto h-1 bg-black dark:bg-white w-1/2 ' />

                <section id='contact' className='p-6 my-12 scroll-mt-20'>
                    <h2 className='text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white'>
                        Contact Us 
                    </h2>
                    <form action="" className='max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-left gap-4'>
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" id='subject' name='subject' required minLength={3} maxLength={60} placeholder='Your subject' className='w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none' />
                        <label htmlFor="message">Message:</label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Your message' required className='w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none'>
                            
                        </textarea>
                        <button className='bg-teal-700 text-2xl hover:bg-teal-600 active:bg-teal-400 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none'>
                            Submit
                        </button>
                    </form>
                </section>

            </main>
            <footer id='footer' className='bg-teal-700 text-white text-xl'>
                <section className='max-w-4xl mx-auto p-4 flex flex-col sm:flex-row  sm:justify-between'>
                    <address >
                        <h2>Acme rocket powered product , inc</h2>
                        55 victoria high land <br />
                        40 bananna high land  08163213590 <br />
                        Email: <a href="akukwefavour1000@gmail.com">Inquiries@acmeschool.com</a> <br />
                        Phone: <a href="akukwefavour1000@gmail.com">08163213590</a> 
                    </address>
                    <nav className=' hidden md:flex flex-col gap-2' aria-label='footer'>
                        <a href="#students" className='hover:opacity-90'>Our Students </a>
                        <a href="#testimonials" className='hover:opacity-90'>Testimonials </a>
                        <a href="#contact" className='hover:opacity-90'>Contact Us </a>
                       
                    </nav>
                    <div className=' flex flex-col sm:gap-2'>
                        <p className='text-right sm:text-center'>Copyright &copy; <span id='year'>2024</span></p>
                        <p className='text-right'>All rights reserved</p>
                    </div>
                </section>
            </footer>
        </body>
    </>
  )
}

export default Index