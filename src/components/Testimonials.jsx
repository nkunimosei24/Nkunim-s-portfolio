import React from "react";
import one from '../assets/images/16.webp'
import two from '../assets/images/testi1.jpg'
import three from '../assets/images/testi2.jpg'

const testimonials = [
  {
    name: "Eric Goddey Dotse",
    role: "Entrepreneur",
    image: one,
    feedback:
      "Working with Nkunim was a game-changer for my business. She built a fully functional and visually stunning e-commerce website that has boosted my sales and made managing my store effortless.",
  },
  {
    name: "Chris Dwumfour",
    role: "Musician",
    image: three,
    feedback:
      "Nkunim’s designs always capture the exact vibe I want for my music. From bold concepts to flawless execution, the flyers she designed for my shows have elevated my brand and attracted more fans.",
  },
  {
    name: "Judith",
    role: "Entrepreneur",
    image: two,
    feedback:
      "Nkunim built a professional website for my business that perfectly represents my brand. The site is clean, user-friendly, and has helped me reach more customers than ever before.",
  },
];

 const Testimonials = () => {
  return (
    <section className="px-6 md:px-20 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 leading-snug">
          Some Positive Feedback <br /> That Encourage Us
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-lg font-semibold text-red-500">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {testimonial.feedback}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials