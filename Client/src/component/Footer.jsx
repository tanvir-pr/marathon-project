import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 shadow-lg">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Left Column: Logo and Description */}
          <div>
            <div className="text-3xl font-bold text-gray-800">Ruibinner</div>
            <p className="mt-4 text-gray-600">
              Your go-to platform for marathon registrations and events. Join us to experience the thrill of running and achieve your goals!
            </p>
          </div>
          
          {/* Middle Column: Useful Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Useful Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                  <i className="fas fa-home"></i> Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                  <i className="fas fa-info-circle"></i> About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                  <i className="fas fa-envelope"></i> Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-blue-600 flex items-center gap-2">
                  <i className="fas fa-file-alt"></i> Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-facebook"></i> Facebook
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-twitter"></i> Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-instagram"></i> Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* New Feature: Quick Contact */}
        <div className="mt-8 flex flex-col md:flex-row justify-between gap-6">
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold text-gray-800">Quick Contact</h3>
            <p className="mt-2 text-gray-600">Have a question or suggestion? Get in touch with us!</p>
            <a href="mailto:support@ruibinner.com" className="text-blue-600 mt-2 inline-block">
              support@ruibinner.com
            </a>
          </div>

          {/* New Feature: Newsletter Subscription */}
          <div className="w-full md:w-1/2">
            <h3 className="text-lg font-semibold text-gray-800">Subscribe to our Newsletter</h3>
            <form className="mt-4 flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 border border-gray-300 rounded-l-md w-full"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 border-t pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Ruibinner. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
