import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className=" bg-black text-white mt-28 bg_gradient ">
      <div className="container mx-auto px-20 lg:px-20 pt-20 flex flex-col gap-10 md:flex-row justify-between">
        <div className="flex">
          <p className="font-bold text-center text-3xl">
            Cast <span className="text-red-500">Iron</span>
          </p>
        </div>

        <div>
          <p className="font-bold text-lg mb-8">QUICK LINKS</p>

          <div className="flex flex-col text-start mb-3 md:mb-0">
            <a
              href="#"
              className="block md:inline-block py-1 hover:text-gray-400 duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-400 duration-200"
            >
              About
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-400 duration-200"
            >
              Services
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-400 duration-200"
            >
              Contact
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-400 duration-200"
            >
              Chiefs
            </a>
          </div>
        </div>

        <div>
          <p className="font-bold text-lg mb-8">LEGAL</p>
          <div className="flex flex-col text-start mb-3 md:mb-0">
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-400 duration-200"
            >
              Terms and Conditions
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-400 duration-200"
            >
              License Agreement
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-400 duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-400 duration-200"
            >
              Copyright Information
            </a>
            <a
              href="#"
              className="block md:inline-block py-2 hover:text-gray-400 duration-200"
            >
              Cookies Policy
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <p className="font-bold text-lg">SOCIAL MEDIA</p>
          <div className="flex mt-4 gap-3">
            <a
              href="#"
              className="bg-blue-600 p-1.5 rounded-lg text-white hover:scale-110"
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="#"
              className="bg-pink-600 p-1.5 rounded-lg text-white hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>
            <a
              href="#"
              className="bg-blue-600 p-1.5 rounded-lg text-white hover:scale-110"
            >
              <FaTwitter size={18} />
            </a>
            <a
              href="#"
              className="bg-red-600 p-1.5 rounded-lg text-white hover:scale-110"
            >
              <FaYoutube size={18} />
            </a>
          </div>

          <button className="mt-10 py-2 md:block bg-transparent border border-white text-white hover:bg-white hover:text-black rounded-lg min-w-[130px] duration-500">
            Sign up
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center py-16">
        <span className="text-gray-500">Cast Iron &copy; 2023</span>
      </div>
    </footer>
  );
}

export default Footer;
