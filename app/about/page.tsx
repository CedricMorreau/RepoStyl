"use client"

import { client } from "@/sanity/lib/client";

import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";

import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import AboutBackgroundCircles from "@/components/AboutBackgroundCircles";

import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Writer from "@/components/Typewriter";

type About = {
    avatar: any;
    title: string;
    paragraph: string;
}

export default async function About() {
    const data: About = await client.fetch("*[_type =='aboutPage'][0]",
        {
            next: {
                revalidate: 60
            }
        }
    )

    return (
        <>
            <div className="absolute h-screen w-screen overflow-hidden">
                <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/4 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#580AFF]/40 blur-xl" />
            </div>

            <div className="absolute h-screen w-screen overflow-hidden">
                <div className="absolute top-0 right-0 h-80 w-80 translate-x-2/4 -translate-y-1/4 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#BE0AFF]/25 blur-lg" />
            </div>

            <div className="absolute top-[35vh] md:top-[40vh] lg:top-[23vh] h-screen w-screen overflow-hidden">
                <div className="absolute bottom-40 left-0 h-96 w-96 -translate-x-2/4 translate-y-2/4 rounded-full  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A1FF0A]/25 blur-lg" />
            </div>

            <div className="m-auto w-9/12 md:w-10/12 md:pt-4 lg:pt-0">
                <MobileHeader />
                <DesktopHeader />

                <div>
                    <div className="mt-16 text-6xl font-medium leading-[3rem] text-primary-dark md:text-[6rem] pb-4">
                       <Writer title="About"/>
                    </div>
                </div>

                <div className='relative mt-16'>
                    <div className='max-w-2xl md:mt-24 lg:max-w-5xl m-auto lg:flex lg:mt-24'>
                        <div className='flex justify-center items-center lg:self-start'>
                            <AboutBackgroundCircles />
                            <Image className='relative rounded-full lg:rounded-xl max-w-[200px] md:max-w-[250px] lg:max-w-[300px]' src={urlForImage(data.avatar).url()} width={500} height={500} alt="placeholder avatar" />
                        </div>

                        <div className='h-[100]'>
                            <motion.div
                                initial={{ height: 0 }}
                                transition={{ type: 'spring', delay: 1, duration: 2 }}
                                whileInView={{ height: "100%" }}
                                className='w-[.1rem] h-[100%] ml-14 bg-primary-dark' />
                        </div>

                        <div className='lg:ml-24 md:pt-8 lg:pt-52 max-w-xl m-auto'>
                            <div className='mt-20 lg:mt-0'>
                                <div className='inline-flex flex-col'>
                                    <h2 className='text-4xl font-medium flex'>{data.title}</h2>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        transition={{ type: 'spring', delay: 1.5, duration: 2 }}
                                        whileInView={{ width: "100%" }}
                                        className="inline pt-3"
                                    >
                                        <div className='border-b-4' />
                                    </motion.div>
                                </div>
                            </div>

                            <div className='pt-10'>
                                <p>
                                    {data.paragraph}
                                </p>
                            </div>

                            <div className="relative float-right mt-12">
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
                    </div>
                </div>
            </div>
        </>
    )
}