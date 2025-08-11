import React from 'react';

const About = () => {
  return (
    <section className=" bg-white text-gray-800 py-12 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* Heading Section */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-black ">
            Designing With Passion
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
            A passionate <strong>Web Developer</strong> and <strong>Graphic Designer</strong> with a unique background in Public Health.
            I specialize in creating visually compelling, user-centric digital solutions that are not only aesthetically pleasing but also purposeful and intuitive.
          </p>
        </div>

        {/* Contact Section */}
        <div className="bg-[#FFFDF0] rounded-xl shadow-lg p-8 space-y-6 text-center md:text-left ">
          <h2 className="text-2xl sm:text-3xl font-bold">
            For inquiries, collaborations, or just to connect:
          </h2>
          <ul className="text-lg space-y-3">
            <li>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:oseinkunim@gmail.com"
                className="text-blue-600 hover:underline"
              >
                oseinkunim@gmail.com
              </a>
            </li>
            <li>
              <strong>Contact:</strong>{' '}
              <a
                href="tel:+233540502328"
                className="text-blue-600 hover:underline"
              >
                +233 540 502 328
              </a>
            </li>
            <li>
              <strong>Location:</strong> Accra, Ghana
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default About;
