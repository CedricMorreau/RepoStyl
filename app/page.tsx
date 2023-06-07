"use client"

import { client } from "@/sanity/lib/client"

import Image from "next/image"
import { urlForImage } from '@/sanity/lib/image'

import MobileHeader from '@/components/MobileHeader'
import DesktopHeader from '@/components/DesktopHeader'
import Button from "@/components/Button"

import { Typewriter } from 'react-simple-typewriter'
import { SocialIcon } from 'react-social-icons'

type Home = {
  slug: string;
  heroImage: any;
}

export default async function Home() {
  const data: Home = await client.fetch("*[_type =='homePage'][0]",
    {
      next: {
        revalidate: 60
      }
    }
  )

  const slug = JSON.stringify(data.slug)
  const slugSlice = slug.slice(1, -1)

  return (
    <>
      {/* backgound circles */}
      <div className="absolute h-screen w-screen overflow-hidden">
        <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/4 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#580AFF]/40 blur-xl" />
      </div>

      <div className="absolute h-screen w-screen overflow-hidden">
        <div className="absolute top-0 right-0 h-80 w-80 translate-x-2/4 -translate-y-1/4 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#BE0AFF]/25 blur-lg" />
      </div>

      <div className="absolute h-screen w-screen overflow-hidden">
        <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-2/4 translate-y-2/4 rounded-full  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A1FF0A]/25 blur-lg" />
      </div>

      <div className="m-auto h-screen w-9/12 md:w-10/12 md:pt-4">
        <MobileHeader />
        <DesktopHeader />

        <div className="grid-cols-6 grid-rows-2 md:grid md:max-h-[80%] lg:justify-items-end md:pt-6">
          {/* Hero image */}
          <div className="col-span-4 row-span-2 hidden md:col-span-6 md:block md:max-w-[85%] lg:col-span-4 lg:max-w-full">
            <div className="relative">
              <Image
                style={{ objectFit: 'cover' }}
                src={urlForImage(data.heroImage).url()}
                alt="PlaceholderLogo"
                width={2400}
                height={2400}
              />
            </div>
          </div>

          {/* typewriter */}
          <div className="pt-20 sm:w-3/4 md:col-span-6 md:pt-5 lg:col-span-2">
            <div className="text-4xl font-medium leading-[3rem] text-primary-dark md:text-[2.5rem]">
              <Typewriter words={[slugSlice]} loop={1} typeSpeed={70} />
            </div>
          </div>

          {/* Mobile button */}
          <div className="absolute top-[61%] left-[12%] sm:block md:hidden">
            <Button />
          </div>
        </div>

        <div className="absolute right-[10%] bottom-[10%] md:bottom-[5%] lg:bottom-[15%]">
          <SocialIcon
            url="https://github.com/CedricMorreau"
            bgColor="#121212"
            fgColor="#f9f9f9"
            className="mr-4"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/cedric-morreau-761a201a8/"
            bgColor="#121212"
            fgColor="#f9f9f9"
          />
        </div>
      </div>
    </>
  )
}
