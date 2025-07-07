'use client'
import React from 'react'
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string
    link: string
    thumbnail: string
  }[]
}) => {
  const firstRow = products.slice(0, 5)
  const secondRow = products.slice(5, 10)
  const thirdRow = products.slice(1, 15)
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end start'],
    offset: ['start 80%', 'end 20%'],
  })

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 }

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [500, 0]),
    springConfig
  )
  // const translateXReverse = useSpring(
  //   useTransform(scrollYProgress, [0, 1], [0, -1000]),
  //   springConfig
  // )
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  )
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  )
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  )
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  )
  return (
    <div
      ref={ref}
      className="h-[70vh]  overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* <Header /> */}
      <motion.div
        // style={{
        //   rotateX,
        //   rotateZ,
        //   translateY,
        //   opacity,
        // }}
        className=""
      >
        {/* <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div> */}
        {/* <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div> */}
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-4">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  )
}






export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string
    link: string
    thumbnail: string
  }
  translate: MotionValue<number>
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
     
      key={product.title}
      className="group/product h-[385px] w-[385px] relative flex-shrink-0 border-8 border-[#E3E2E2] rounded-lg"
    >





{/* 
<svg
    width="50"
    height="50"
    viewBox="0 0 143 143"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="absolute top-2 left-2"
  >
    <path
      d="M119.976 34.178L119.946 34.6181L120.379 34.703C130.168 36.6223 138.446 43.4518 141.047 53.159C143.648 62.8665 139.902 72.9242 132.376 79.4759L132.043 79.7659L132.29 80.1323C137.861 88.406 138.877 99.0941 133.854 107.794L133.854 107.794C128.833 116.5 119.073 120.956 109.116 120.27L108.676 120.24L108.591 120.673C106.672 130.462 99.8422 138.74 90.135 141.341C80.4275 143.942 70.3698 140.196 63.8181 132.67L63.5281 132.337L63.1617 132.584C54.888 138.155 44.1999 139.171 35.4998 134.148L35.4996 134.148C26.7936 129.127 22.3375 119.367 23.0235 109.41L23.0539 108.97L22.6209 108.885C12.8319 106.966 4.55437 100.136 1.95334 90.429C-0.647695 80.7218 3.10605 70.6684 10.624 64.1118L10.9565 63.8218L10.7101 63.4557C5.13921 55.182 4.12275 44.4939 9.14578 35.7938L9.1459 35.7936C14.1672 27.0876 23.9267 22.6315 33.884 23.3175L34.3241 23.3478L34.409 22.9149C36.3283 13.1259 43.1578 4.84836 52.865 2.24733C62.5722 -0.353706 72.6255 3.40004 79.1822 10.918L79.4722 11.2505L79.8383 11.0041C88.112 5.4332 98.8001 4.41674 107.5 9.43977L107.5 9.43988C116.206 14.4611 120.662 24.2207 119.976 34.178Z"
      fill="#FF90E7"
      stroke="black"
    />
  </svg> */}


      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="1000"
          width="1000"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      {/* <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2> */}





    </motion.div>
  )
}
