import React from 'react';

const testimonials = [
  {
    name: "John Doe",
    feedback: "Jericho has transformed the way I manage my tasks. Highly recommend!",
  },
  {
    name: "Jane Smith",
    feedback: "The best WhatsApp bot I've ever used. It's intuitive and efficient!",
  },
  {
    name: "Alice Johnson",
    feedback: "Amazing experience! Jericho makes communication so much easier.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="flex flex-col space-y-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic">"{testimonial.feedback}"</p>
              <p className="mt-4 font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;