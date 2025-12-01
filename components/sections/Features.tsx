import React from 'react';

const Features = () => {
  const features = [
    {
      title: 'Instant Responses',
      description: 'Get immediate answers to your queries with our automated responses.',
    },
    {
      title: '24/7 Availability',
      description: 'Our bot is available around the clock to assist you anytime.',
    },
    {
      title: 'User-Friendly Interface',
      description: 'Interact with the bot easily through a simple and intuitive interface.',
    },
    {
      title: 'Customizable Options',
      description: 'Tailor the bot’s responses and features to fit your needs.',
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Features of Jericho</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;