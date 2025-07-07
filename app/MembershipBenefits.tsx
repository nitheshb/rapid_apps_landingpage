import React from 'react';

import Image from 'next/image';

import line from './images/line.svg'


import { motion, useScroll, useTransform } from "framer-motion";



import Button from './Button';




import img1 from './images/img1.svg'
import img2 from './images/img2.svg'


export default function MembershipBenefits() {

  // const { scrollY } = useScroll();
  // const yTransform = useTransform(scrollY, [0, 10], [10, 0]); 
  const benefits = [
    {
      icon: (
        <div className="w-16 h-16 bg-emerald-400 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 bg-yellow-400 grid place-items-center">
            <div className="w-6 h-6 grid grid-cols-3 gap-0.5">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-black rounded-sm" />
              ))}
            </div>
          </div>
        </div>
      ),
      title: "Design board",
      description: "Easily manage your design queue with a Trello board."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 text-white">0</div>
        </div>
      ),
      title: "Lightning fast delivery",
      description: "Get your design one at a time in just a few days on average."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 text-white">o</div>
        </div>
      ),
      title: "Fixed monthly rate",
      description: "No surprises here! Pay the same fixed price each month."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 text-white">o</div>
        </div>
      ),
      title: "Top-notch quality",
      description: "Insane design quality at your fingertips whenever you need it."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 text-black">o</div>
        </div>
      ),
      title: "Flexible and scalable",
      description: "Scale up or down as needed, and pause or cancel at anytime."
    },
    {
      icon: (
        <div className="w-16 h-16 bg-pink-400 rounded-full flex items-center justify-center">
          <div className="w-8 h-8 text-white">0</div>
        </div>
      ),
      title: "Unique and all yours",
      description: "Each of your designs is made especially for you and is 100% yours."
    }
  ];

  return (
    <div className="relative w-full max-w-8xl mx-auto px-4 py-16">

      <div className="absolute left-0 top-0">
      <Image src={img1} alt={''} width={150} height={150}/>
      
   
      </div>

      <div className="absolute right-0 top-0">
      <Image src={img2} alt={''} width={300} height={300}/>
    
      </div>



      <motion.div
className='flex items-center justify-center mb-8'
  transition={{ duration: 1, ease: "easeInOut" }}
  initial={{ opacity: 0, y: -50 }} 
  whileInView={{ opacity: 1, y: 0 }} 
  viewport={{ once: true, amount: 0.5 }}
>

<Image src={line} alt={''}   />


</motion.div>




      {/* <div className='flex items-center justify-center mb-8'>
        <Image src={line} alt={''}   />
        </div> */}

      {/* Main Content */}
      <div className="max-w-3xl mx-auto text-center pt-20">
        {/* <motion.h2 className="text-4xl md:text-5xl font-bold mb-4">
          Membership benefits
        </motion.h2>
        <motion.h1 className="text-xl mb-16">
          Perks so good you'll never need to go anywhere else for your design. Seriously.
        </motion.h1> */}




<motion.h2
  className="text-4xl md:text-5xl font-bold mb-4"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true, amount: 0.5 }}



>
  Membership benefits
</motion.h2> 
<motion.h1
  className="text-xl mb-16"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true, amount: 0.5 }}
>
  Perks so good you'll never need to go anywhere else for your design. Seriously.
</motion.h1>






<motion.div
          transition={{ duration: 1, ease: "easeInOut" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
        >

<div className="grid md:grid-cols-3 gap-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>


          </motion.div>





      </div>
    </div>
  );
}