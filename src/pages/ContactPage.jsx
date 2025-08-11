import React from 'react'
import image from '../assets/images/bg5.png'
import { HiOutlineHome, HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

const ContactPage = () => {
  return (
    <div>
      <div className='relative bg-cover bg-center h-100 flex items-center text-left pt-20' style={{ backgroundImage: `url(${image})` }}>
              <div className='absolute inset-0 z-0 bg-black/10' />
              <h1 className='z-20 text-7xl text-gray-900 relative font-bold px-16'>Contact Us</h1>
            </div>

            <section className="px-6 md:px-20 py-16 bg-white">
      <div className="grid md:grid-cols-2 gap-20  items-start">
        
        {/* Left - Contact Form */}
        <div >
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Get in Touch
          </h2>
          <form className="space-y-6">
            <textarea
              placeholder="Enter Message"
              rows="6"
              className="w-full border border-gray-200 rounded-md p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Enter your name"
                className="border border-gray-200 rounded-md p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
              />
              <input
                type="email"
                placeholder="Email"
                className="border border-gray-200 rounded-md p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
              />
            </div>
            <input
              type="text"
              placeholder="Enter Subject"
              className="w-full border border-gray-200 rounded-md p-4 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 transition"
            />
            <button
              type="submit"
              className="border border-red-500 text-red-500 px-10 py-3 uppercase tracking-widest rounded-md font-semibold hover:bg-red-500 hover:text-white transition duration-300 shadow-sm"
            >
              Send
            </button>
          </form>
        </div>

        {/* Right - Contact Info */}
        <div className="space-y-10 flex flex-col justify-center md:mt-35 ">
          <div className="flex items-start gap-4">
            <HiOutlineHome className="text-3xl text-red-500 mt-1" />
            <div>
              <h4 className="font-semibold text-gray-900">
                Accra, Ghana.
              </h4>
              <p className="text-gray-600">2nd Royal Avenue Street, Adenta West</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <HiOutlinePhone className="text-3xl text-red-500 mt-1" />
            <div>
              <h4 className="text-gray-900 font-medium">+233 54050 2328</h4>
              <p className="text-gray-600">Mon to Fri 9am to 6pm</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <HiOutlineMail className="text-3xl text-red-500 mt-1" />
            <div>
              <h4 className="text-gray-900 font-medium">
                oseinkunim@gmail.com
              </h4>
              <p className="text-gray-600">Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default ContactPage