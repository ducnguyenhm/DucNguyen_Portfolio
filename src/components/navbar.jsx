import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaSquareFacebook } from 'react-icons/fa6';

const Navbar = () => {
    return (
        <nav className="bg-gradient-to-r from-blue-500 from-blue-800 text-white px-8 md:px-16 lg:px-24">
            <div className="container py-2 flex justify-center md:justify-between items-center">
                <div className="text-2xl font-bold hidden md:inline"> Duke </div>
                <div className="space-x-6"> 
                    <a href="#home" className="hover:text-blue-300"> Home </a>
                    <a href="#about" className="hover:text-blue-300"> About Me </a>
                    <a href="#education" className="hover:text-blue-300"> Education</a>
                    <a href="#experience" className="hover:text-blue-300"> Experience </a>
                    <a href="#projects" className="hover:text-blue-300"> Projects </a>
                    <a href="#skills" className="hover:text-blue-300"> Skills</a>
                </div>
                
                <div className='m-8 flex items-center justify-center gap-4 text-2xl'> 
                    <a href = "https://github.com/ducnguyenhm"> <FaGithub></FaGithub> </a> 
                    <a href = "https://www.linkedin.com/in/duc-nguyen-hm/" > <FaLinkedin></FaLinkedin> </a>
                </div>

            </div>
         
        </nav>
    );
}
export default Navbar;