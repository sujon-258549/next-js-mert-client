import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../utils/Logo";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-900 py-10 md:py-12">
      <footer className=" rounded-lg shadow-sm container">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex flex-col sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <Logo />
            </a>
            <p className="pt-5 text-gray-600 max-w-[450px] text-center">
              Save big this Black Friday with unbeatable deals on tech, home
              essentials, fashion, and more! Limited stock.
            </p>
          </div>
          <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <ul className="flex flex-wrap  justify-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
          <p className="block text-sm text-gray-500 sm:text-center dark:text-gray-400"></p>

          <div className="flex justify-center gap-4 mt-5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-xl"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-xl"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 text-xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
