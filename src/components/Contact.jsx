import React from 'react'
import bg from '../assets/images/bg5.jpg'

const Contact = () => {
  return (
    <div
      className="relative bg-cover bg-center py-20 px-4 md:px-16 text-black"
      style={{ backgroundImage: `url(${bg})` }}
      
    >
      <div className='absolute inset-0 z-0 bg-[#FEB3AE]/20'/>
      <div className=" bg-opacity-60 p-8 rounded-lg flex flex-col md:flex-row gap-12  z-20 relative ">
        {/* Left Content */}
        <div className="md:w-1/2 space-y-6 ">
          <h1 className="text-5xl font-bold">Now is the time!
</h1>
          <h2 className="text-4xl">Let’s bring your ideas to life.</h2>
          <p className="text-gray-800 leading-relaxed">
            I'm always open to new opportunities, collaborations, <br />or just a good conversation. Whether you have a 
            project in mind, <br />a question, or simply want to say hello, I'd love to hear from you. <br /> Feel free to reach out,
            and let's make something great together!
          </p>
        </div>

        {/* Right Form */}
        <div className="md:w-1/2  p-6 rounded-md text-black -mt-5">
          <form action="https://formspree.io/f/xldeezyn" method="POST" className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#873B2C] bg-white"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#873B2C] bg-white"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder="Please enter the details of your request"
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#873B2C] bg-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#873b2ce5] hover:bg-[#873B2C] text-white py-2 rounded transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
