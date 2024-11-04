import React from 'react'
import { FaFacebook, FaLinkedin, FaMobileAlt } from 'react-icons/fa';
import { FaInstagram, FaLocationArrow } from 'react-icons/fa6';

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-20 pt-5'>
                {/* compant details */}
                <div className='py-8 px-4'>
                    <a href="#"
                    className='text-primary font-bold tracking-widest text-2xl
                    uppercase sm:text-3xl'
                    >Bright Gadgets</a>
                    <p className='text-gray-700 dark:text-white/70 lg:pr-24 pt-3'>
                        Lorem ipsum dolor sit,
                         amet consectetur
                         adipisicing elit. 
                         Deserunt sequi
                          labore iusto earum commodi.
                    </p>
                </div>

                {/* footer links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Important links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map(
                                    (data, index) => (
                                        <li key={index}>
                                            <a
                                             href={data.link} 
                                             className='text-gray-700 dark:text-gray-400
                                              hover:dark:text-white hover:text-black duration-300'>
                                                {data.title}
                                             </a>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>

                    {/* second col link */}

                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Quick links</h1>
                        <ul className='space-y-3'>
                            {
                                FooterLinks.map(
                                    (data, index) => (
                                        <li key={index}>
                                            <a
                                             href={data.link} 
                                             className='text-gray-700 dark:text-gray-400
                                              hover:dark:text-white hover:text-black duration-300'>
                                                {data.title}
                                             </a>
                                        </li>
                                    )
                                )
                            }
                        </ul>
                    </div>

                      {/* company address */}
                      <div className='py-8 px-4 col-span-2 sm:col-auto'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                        <div>
                            <div >
                               <div className="flex items-center gap-3">
                                  <FaLocationArrow  className='text-6xl hover:text-primary duration-300' />
                                 <p>11 OSHITELU STREET, BESIDE MOJOY PLAZA,
                                    COMPUTER VILLAGE, IKEJA, LAGOS.
                                 </p>
                               </div>
                               <div className='flex items-center gap-3 mt-6'>
                                 <FaMobileAlt className='text-3xl hover:text-primary duration-300' />
                                  <p> 09083247317 <br /> 07026738903</p>
                                  
                               </div>

                               {/* social links */}
                               <div className='flex items-center gap-3 mt-6'>
                                <a href="">
                                    <FaInstagram className='text-3xl hover:text-primary duration-300' />
                                </a>
                                <a href="">
                                    <FaFacebook className='text-3xl hover:text-primary duration-300' />
                                </a>
                                <a href="">
                                    <FaLinkedin className='text-3xl hover:text-primary duration-300' />
                                </a>
                               </div>
                            </div>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer