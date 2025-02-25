import { faFacebook, faInstagram, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-800 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* E-CART Brand Section */}
        <div>
          <h2 className="text-xl font-bold flex items-center">
            <span className="mr-2"><FontAwesomeIcon icon={faCartShopping} /></span> E-CART
          </h2>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit velit placrat quas.
          </p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold">Links</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Wishlist</a></li>
            <li><a href="#" className="hover:underline">Cart</a></li>
          </ul>
        </div>

        {/* Guides Section */}
        <div>
          <h3 className="text-lg font-semibold">Guides</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="#" className="hover:underline">React</a></li>
            <li><a href="#" className="hover:underline">React Bootstrap</a></li>
            <li><a href="#" className="hover:underline">Bootswatch</a></li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h3 className="text-lg font-semibold">Contact Us</h3>
          <div className="mt-2 flex">
            <input
              type="email"
              placeholder="Email Id"
              className="w-full px-3 py-2 rounded-l-md text-black bg-white"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md ms-3">
              Subscribe
            </button>
          </div>
          <div className="mt-4 flex space-x-19">
            <a href="#" className="text-xl hover:text-gray-300"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#" className="text-xl hover:text-gray-300"><FontAwesomeIcon icon={faLinkedinIn} /></a>
            <a href="#" className="text-xl hover:text-gray-300"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#" className="text-xl hover:text-gray-300"><FontAwesomeIcon icon={faInstagram} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;