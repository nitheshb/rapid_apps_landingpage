"use client"; 
import Link from 'next/link'
import Image from 'next/image'

import './index.css'

const SketchyNavbar = () => {
  const navItems = [
    { name: 'How it works', href: '/how-it-works' },
    { name: 'Benefits', href: '/benefits' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'FAQs', href: '/faqs' },
  ]

  return (
    <div className="  fixed bottom-8 left-1/2 -translate-x-1/2 z-50  ">
      <nav className="bg-gradient-to-b from-black to-[#292929] border border-black rounded-full flex items-stretch p-1.5 shadow-[0_4px_8px_2px_#00000045,0_10px_20px_1px_#0003,inset_0_2px_1px_#ffffff80]">
        <div className="relative flex items-center justify-between ">
          {/* <Link href="/" className="flex-shrink-0">
            <div className="w-10 h-10 bg-white rounded-full flex text-center  items-center justify-center">
              <div className=" bg-neutral-800 text-white rounded-full font-bold px-6 py-6   hover:bg-neutral-700 transition-colors">⌣</div>
            </div>
          </Link> */}

<a className="px-6 py-5 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors">
       
            <svg width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.39326 3.91052C5.63722 9.57639 10.6849 13.8165 16.7244 13.8165C22.7638 13.8165 27.8115 9.57592 29.0555 3.91052" stroke="white" stroke-width="4.92207" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

        
          </a> 


{/* <a className="px-6 py-5 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors group">

  <svg className="group-hover:hidden" width="33" height="18" viewBox="0 0 33 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.39326 3.91052C5.63722 9.57639 10.6849 13.8165 16.7244 13.8165C22.7638 13.8165 27.8115 9.57592 29.0555 3.91052" stroke="white" strokeWidth="4.92207" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>

  <svg className="group-hover:block hidden" width="21" height="34" viewBox="0 0 21 34" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 33.5L10.5 0.5C10.5 6.33333 8.5 12.5 0.499999 12.5" stroke="white"/>
    <path d="M10.5 33.5L10.5 0.5C10.5 6.33333 12.5 12.5 20.5 12.5" stroke="white"/>
  </svg>
</a> */}


          

          <div className="hidden md:flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white transition-all  ease-in-out duration-600  hover:bg-yellow-400 hover:text-black p-2 px-5 py-5 rounded-full  text-[15px] font-medium "
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button className="px-6 py-5 bg-neutral-800 text-white rounded-full hover:bg-neutral-700 transition-colors">
            Login
          </button>
        </div>
      </nav>










    </div>
  )
}

export default SketchyNavbar


