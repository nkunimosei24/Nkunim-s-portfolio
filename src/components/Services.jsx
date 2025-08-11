import React from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { SiMaterialdesign } from 'react-icons/si';

const Services = () => {
  const services = [
    {
      icon: <FaLaptopCode size={32} className="text-red-500" />,
      label: 'Web Development and Design',
      description:
        'From landing pages to dynamic websites, I build responsive and fast-loading web experiences using modern tools and clean code—ensuring your online presence is both functional and attractive.'
    },
    {
      icon: <MdDesignServices size={32} className="text-red-500" />,
      label: 'Graphic Design',
      description:
        'I create eye-catching visuals—from social media designs to brand assets—that help communicate your message clearly and leave a lasting impression on your audience.'
    },
    {
      icon: <SiMaterialdesign size={32} className="text-red-500" />,
      label: 'UI/UX Design',
      description:
        'I design user-friendly and visually engaging interfaces that prioritize the needs of users while meeting the goals of your business. My focus is on simplicity, clarity, and seamless user experience.'
    }
  ];

  return (
    <section className="bg-[#FFF9F9] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A] mb-12">
          Services you will <br /> Get from me!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative group overflow-hidden border border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center shadow-sm transition-all duration-500 cursor-pointer"
            >
              {/* Animated background layer */}
              <div className="absolute inset-0 bg-[#873b2ce1] scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-700 ease-in-out z-0" />

              {/* Foreground content */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="bg-red-100 rounded-full p-4 mb-4 transition duration-300 group-hover:bg-white">
                  {service.icon}
                </div>
                <h2 className="text-xl font-semibold text-gray-700 mb-4 transition duration-300 group-hover:text-white">
                  {service.label}
                </h2>
                <p className="text-gray-500 leading-relaxed transition duration-300 group-hover:text-white">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
