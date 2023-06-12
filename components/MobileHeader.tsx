"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { Spin as Hamburger } from 'hamburger-react'
import Link from 'next/link'

const variantGreen = {
  open: {
    transform: 'translateY(0)',
  },
  closed: {
    transform: 'translateY(-100%)',
  },
}

export default function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen === true) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  return (
    <div className="flex pt-14 sm:block md:hidden">
      <Link href="/">
        <div className="relative h-12 w-40">
          <Image
            src="/Styllogo.png"
            width={250}
            height={250}
            alt="PlaceholderLogo"
          />
        </div>
      </Link>

      {/* menu */}
      <motion.div
        animate={isOpen ? 'open' : 'closed'}
        variants={variantGreen}
        transition={{ duration: 0.5 }}
        className="fixed left-0 top-0 z-10 h-screen w-screen translate-y-[-100%] bg-primary-dark"
      >
        <div className="absolute z-20 h-screen w-screen overflow-hidden">
          <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-2/4 translate-y-2/4 rounded-full  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#BE0AFF]/50 blur-3xl" />
        </div>

        <div className="relative z-30 m-auto w-9/12 pt-14">
          <div className="relative h-12 w-40">
            <Image
              src="/StyllogoLicht.png"
              width={250}
              height={250}
              alt="PlaceholderLogo"
            />
          </div>

          <div className="flex flex-col pt-20 text-5xl text-primary-light">
            <ul>

              <Link href="/">
                <li className='inline-flex flex-col mb-8'>
                  <span className='flex'>Home</span>
                  <motion.div
                    initial={{ width: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    whileInView={{ width: "100%" }}
                    className="inline"
                  >
                    <div className='border-b-4 pt-1' />
                  </motion.div>
                </li>
              </Link>

              <Link href="/projects">
                <li className='inline-flex flex-col mb-8'>
                  <span className='flex'>Projecten</span>
                  <motion.div
                    initial={{ width: 0 }}
                    transition={{ delay: 0.6, duration: 1 }}
                    whileInView={{ width: "100%" }}
                    className="inline"
                  >
                    <div className='border-b-4 pt-1' />
                  </motion.div>
                </li>
              </Link>

              <Link href="/about">
                <li className='inline-flex flex-col mb-8'>
                  <span className='flex'>Over Styl</span>
                  <motion.div
                    initial={{ width: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                    whileInView={{ width: "100%" }}
                    className="inline"
                  >
                    <div className='border-b-4 pt-1' />
                  </motion.div>
                </li>
              </Link>


              <Link href="/contact">
                <li className='inline-flex flex-col mb-8'>
                  <span className='flex'>Contact</span>
                  <motion.div
                    initial={{ width: 0 }}
                    transition={{ delay: 1.0, duration: 1 }}
                    whileInView={{ width: "100%" }}
                    className="inline"
                  >
                    <div className='border-b-4 pt-1' />
                  </motion.div>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </motion.div>

      <div className="fixed right-6 top-[7%] z-20">
        <div className="rounded-full bg-primary-light drop-shadow-md">
          <Hamburger
            size={18}
            toggled={isOpen}
            toggle={setIsOpen}
            color="#121212"
          />
        </div>
      </div>
    </div>
  )
}

