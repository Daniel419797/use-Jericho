import React from 'react';

const Pricing = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Pricing Plans</h2>
        <p className="text-lg mb-12">Choose a plan that fits your needs.</p>
        <div className="flex flex-wrap justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
            <h3 className="text-xl font-semibold mb-4">Basic Plan</h3>
            <p className="text-2xl font-bold mb-4">$19/month</p>
            <ul className="mb-6">
              <li>✔️ Feature 1</li>
              <li>✔️ Feature 2</li>
              <li>✔️ Feature 3</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Get Started</button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
            <h3 className="text-xl font-semibold mb-4">Pro Plan</h3>
            <p className="text-2xl font-bold mb-4">$49/month</p>
            <ul className="mb-6">
              <li>✔️ Feature 1</li>
              <li>✔️ Feature 2</li>
              <li>✔️ Feature 3</li>
              <li>✔️ Feature 4</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Get Started</button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-80">
            <h3 className="text-xl font-semibold mb-4">Enterprise Plan</h3>
            <p className="text-2xl font-bold mb-4">Contact Us</p>
            <ul className="mb-6">
              <li>✔️ Feature 1</li>
              <li>✔️ Feature 2</li>
              <li>✔️ Feature 3</li>
              <li>✔️ Feature 4</li>
              <li>✔️ Custom Solutions</li>
            </ul>
            <button className="bg-blue-500 text-white py-2 px-4 rounded">Contact Us</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;