import React from 'react'
import { assestsImg, testimonialsData } from '../assets/assets';

const Testimonial = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20 py-12"><h1 className="text-3xl sm:text-4xl font-semibold mb-2">Customer Testimonials</h1>
  <p className="text-gray-500 mb-12">"See What Our Users Love About Us!</p>
<div className="flex flex-wrap gap-6 justify-center">
  {testimonialsData.map((testimonial, index) => (
    <div
      className="bg-white/20 p-12 rounded-lg shadow-md border w-80 h-auto min-h-[320px] flex flex-col justify-between m-auto cursor-pointer hover:scale-[1.02] transition-all duration-300"
      key={index}
    >
      <div className="flex flex-col items-center">
        <img className="rounded-full w-14" src={testimonial.image} alt="" />
        <h2 className="text-xl font-semibold mt-3">{testimonial.name}</h2>
        <p className="text-gray-500 mb-4">{testimonial.role}</p>
        <div className="flex mb-4">
          {Array(testimonial.stars)
            .fill()
            .map((_, i) => (
              <img className="w-5 rounded-full" key={i} src={assestsImg.star} alt="" />
            ))}
        </div>
        <p className="text-center text-sm text-gray-600 line-clamp-3">{testimonial.text}</p>
      </div>
    </div>
  ))}
</div>

  </div>
  )
}

export default Testimonial;