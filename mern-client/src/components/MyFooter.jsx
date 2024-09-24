import { Footer } from 'flowbite-react';
import { BsFacebook, BsGithub, BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaDribbble } from 'react-icons/fa6';

const MyFooter = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          {/* Company Section */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">About</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Careers</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Brand Center</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>
          {/* Help Center */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-lime-400">Help Center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Discord Server</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Twitter</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Contact us</a>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-lime-400">Help Center</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">Privacy Policy</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Licensing</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Terms&Conditions</a>
              </li>
            </ul>
          </div>
          {/* Downloads */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-lime-400">Download</h2>
            <ul className="text-gray-500 dark:text-gray-400 font-medium">
              <li className="mb-4">
                <a href="#" className="hover:underline">IOS</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Android</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">Windows</a>
              </li>
              <li className="mb-4">
                <a href="#" className="hover:underline">MacOs</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-4 py-6 bg-gray-600 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-500 dark:text-blue-500 sm:text-center">
            © 2024 <a href="https://flowbite.com/" className="hover:underline">Tevinsmark™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center md:mt-0 space-x-5">
            {/* Social Icons */}
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <BsFacebook className="w-4 h-4" />
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <BsTwitter className="w-4 h-4" />
              <span className="sr-only">Twitter page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <BsGithub className="w-4 h-4" />
              <span className="sr-only">Github page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <BsInstagram className="w-4 h-4" />
              <span className="sr-only">Instagram page</span>
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <FaDribbble className="w-4 h-4" />
              <span className="sr-only">Dribble page</span>
            </a>
            {/* Add more social icons */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MyFooter;
