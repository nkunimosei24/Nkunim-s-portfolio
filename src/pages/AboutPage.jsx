import React from 'react'
import image from '../assets/images/bg5.png'
import img from '../assets/images/image3.jpg'
import About from '../components/About'

const AboutPage = () => {
  return (
    <div className=''>
      <div className='relative bg-cover bg-center h-100 flex items-center text-left pt-20' style={{ backgroundImage: `url(${image})` }}>
        <div className='absolute inset-0 z-0 bg-black/10' />
        <h1 className='z-20 text-7xl text-gray-900 relative font-bold px-16'>About Me</h1>
      </div>



  <div className="flex flex-col md:flex-row items-center md:items-center justify-center gap-12 px-6 md:px-12 py-8 mt-4 md:mt-8 ">
  
  {/* Image Section */}
  <div className="md:w-1/2 p-4 rounded-xl shadow-lg bg-white">
    <img 
      src={img} 
      alt="Collaboration" 
      className="h-full w-full object-cover rounded-lg hover:scale-105 transition-transform duration-300" 
    />
  </div>

  {/* Text Section */}
  <div className="md:w-1/2 space-y-6 text-center md:text-left">
    <h1 className="text-5xl font-semibold text-gray-900 leading-tight">
      I make products that do more than look good.
    </h1>

    <p className="text-gray-700 text-lg leading-relaxed">
      My work goes beyond making things look beautiful — I design with purpose. Every project I take on is driven by strategy, usability, and real-world impact. For me, design is not just an art form; it’s a tool to solve problems, tell stories, and create products that people truly connect with. 
    </p>

    <div className="border-l-2 border-[#d4c5b3] pl-4 py-4 text-lg md:text-xl font-semibold text-gray-800 leading-relaxed">
      I create products with purpose, built to inspire and built to last.
    </div>

    <p className="text-gray-700 text-lg leading-relaxed">
      From concept to launch, I create digital experiences that are intuitive, engaging, and built to last. I combine creativity with functionality to ensure that what I build doesn’t just impress at first glance, but delivers lasting value.
    </p>
  </div>
</div>

<About />

</div>

  )
}

export default AboutPage