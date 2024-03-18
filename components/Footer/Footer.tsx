import Link from 'next/link';

import Github from './Icons/github';
import Web from './Icons/web';

export const Footer = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©&nbsp;{new Date().getFullYear()}&nbsp;
          <Link href="https://jcvegab.site" className="hover:underline">
            Jcvegab
          </Link>
          . All Rights Reserved.
        </span>
        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          <Link
            href="https://github.com/jcvegab"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <Github />
          </Link>
          <Link
            href="https://jcvegab.site"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
          >
            <Web />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
