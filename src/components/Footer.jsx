import React from 'react'
import logo from '../assets/images/logo.png'
import { IoIosSquare } from 'react-icons/io'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { TbBrandWhatsappFilled } from 'react-icons/tb'

const Footer = () => {
  return (
    <footer className="bg-[#873B2C] py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6">

        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Portfolio Logo" className="w-12 h-12 object-contain" />
          <div className='flex items-center'><h1 className='font-bold text-3xl text-gray-100'>NKUNIM</h1><IoIosSquare size={6} className='mt-5 text-pink-300'/></div>
        </div>

        {/* Contact Info */}
        <div className="text-center space-y-1 text-white">
          <div className='flex justify-center space-x-6'>
            <a href="https://github.com/nkunimosei24"><FaGithub size={25}/></a>
            <a href="www.linkedin.com/in/nkunim-asaah-osei-43973324a"><FaLinkedin size={25} /></a>
            <a href=""><TbBrandWhatsappFilled size={25} /></a>

          </div>
          <p className="text-sm">2nd Royal Avenue Street, Adenta West</p>
          <p className="text-sm">Accra, Ghana</p>
        </div>

        {/* Bottom Divider */}
        <div className="w-full border-t border-gray-300 pt-4 text-center text-sm text-white">
          © {new Date().getFullYear()} Nkunim's Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
