import React from 'react';

function Footer() {
  return (
    <>
      <hr className="mx-auto border-solid border-b-1 border-slate-500 w-11/12" />
      <footer>
        <div className="container px-5 py-2 mx-auto flex items-center sm:flex-row flex-col text-black justify-between">
          <div>
          <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 @ Ritik Raushan
          </p>
          </div>
          <div>
          <form action="#">
  <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
    <div className="relative w-full">
      <label htmlFor="email" className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email address</label>
      <div className="flex absolute inset-y-0 left-0 items-center pointer-events-none">
        <svg className="w-5 h-5 text-purple-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
      </div>
      <input className="block p-2 pl-10 w-full text-sm text-gray-900 rounded-lg border border-slate-500 sm:rounded-none sm:rounded-l-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:purple-500 dark:placeholder-black-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="  Enter your email" type="email" id="email" required=""/>
    </div>
    <div>
      <button type="submit" className="py-2 w-24 text-sm font-medium text-center text-blaCK rounded-lg border cursor-pointer bg-purple-500 border-purple-500 sm:rounded-none sm:rounded-r-lg hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 hover:bg-purple-900">Subscribe</button>
    </div>
  </div>
</form>

          </div>
          <div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a target='blank' className="text-black" href="https://github.com/RitikRaushan95">
              <svg width="24" height="24" viewBox="0 0 24 24" className='fill-purple-500'>
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a target='blank' href="https://twitter.com/RitikRaushan95" className="ml-3 text-black">
              <svg strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-black fill-purple-500" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a target='blank' href="https://www.instagram.com/ritikraushan9534/" className="ml-3 text-black">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-black fill-purple-500" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a target='blank' href="https://www.linkedin.com/in/ritik-raushan/" className="ml-3 text-black">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5 text-black fill-purple-500" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                <circle cx="4" cy="4" r="2" stroke="none"/>
              </svg>
            </a>
          </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;