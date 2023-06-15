"use client"

import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";

import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"

import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";

import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion";
import CountUp from 'react-countup';



type Props = {
    params: { slug: string }
}

type Projects = {
    _id: string;
    cardImage: any;
    mobileHeaderImage: any;
    tabletHeaderImage: any;
    desktopHeaderImage: any
    title: string;
    slug: string;
    tech: string;
    subTitle: string;
    paragraph: string;
    githubLink: string;
    workHours: number;
    coffee: number;
}

export default async function page({ params }: Props) {
    const data = await client.fetch<Projects>(`*[_type == "projects"&& slug == "${params.slug}"][0]`,
        {
            next: {
                revalidate: 60
            }
        }
    )

    if (!data) {
        notFound()
    }


    return (
        <>
            <div className="absolute top-[20vh] h-screen w-screen overflow-hidden">
                <div className="absolute bottom-[25vh] left-0 h-96 w-96 -translate-x-2/4 translate-y-2/4 rounded-full  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A1FF0A]/25 blur-lg" />
            </div>

            <div className="absolute w-full border-1 border-[#121212]/20 drop-shadow-lg">
                <div className="absolute bottom-0 pb-4 lg:pb-8 pt-60 px-5 lg:px-14 w-full bg-gradient-to-t from-primary-dark/20 text-primary-light">
                    <h2 className="text-6xl pb-6">{data.title}</h2>
                    <h3 className="text-xl font-medium">{data.tech}</h3>
                </div>

                <div className="flex min-h-[90vh]">
                    <Image className="md:hidden" src={urlForImage(data.mobileHeaderImage).url()} style={{ objectFit: 'cover' }} alt="Placeholder_project" width={2000} height={2000} />
                    <Image className="hidden md:block lg:hidden" src={urlForImage(data.tabletHeaderImage).url()} style={{ objectFit: 'cover' }} alt="Placeholder_project" width={2000} height={2000} />
                    <Image className="hidden lg:block" src={urlForImage(data.desktopHeaderImage).url()} style={{ objectFit: 'cover' }} alt="Placeholder_project" width={2000} height={2000} />
                </div>
            </div>


            <div className="m-auto w-9/12 md:w-10/12 md:pt-4">
                <div>
                    <DesktopHeader />
                    <MobileHeader />
                </div>


                <div className="relative lg:flex mt-[90vh] lg:mb-16 justify-center text-primary-dark">
                    <div className='relative inline-flex flex-col mb-14'>
                        <span className='flex text-4xl'>{data.subTitle}</span>
                        <motion.div
                            initial={{ width: 0 }}
                            transition={{ delay: 0.6, duration: 1 }}
                            whileInView={{ width: "100%" }}
                            viewport={{ once: true }}
                            className="inline"
                        >
                            <div className='border-b-2 pt-4' />
                        </motion.div>
                    </div>


                    <motion.div
                        initial={{ height: 0 }}
                        transition={{ type: 'spring', delay: 1, duration: 2 }}
                        whileInView={{ height: "100%" }}
                    />

                    <div className='h-[100] hidden lg:block ml-14 mr-24'>
                        <motion.div
                            initial={{ height: 0 }}
                            transition={{ type: 'spring', delay: 1, duration: 2 }}
                            whileInView={{ height: "100%" }}
                            viewport={{ once: true }}
                            className='w-[.1rem] h-[100%] bg-primary-dark' />
                    </div>


                    <div className="lg:mt-32">
                        <div className="flex w-full xl:justify-end">
                            <div className="max-w-xl">
                                <p className="mb-10">
                                    {data.paragraph}
                                </p>
                                <span className="block text-2xl mb-4">Find this project on:</span>
                                <SocialIcon
                                    url={`https://github.com/${data.githubLink}`}
                                    bgColor="#121212"
                                    fgColor="#f9f9f9"
                                />
                            </div>
                        </div>




                        <div className="flex w-full justify-end">
                            <div className="mt-20 w-full flex justify-between pb-16 max-w-sm">
                                <div className="flex flex-col">
                                    <CountUp
                                        className="text-4xl font-semibold"
                                        end={data.coffee}
                                        duration={5}
                                        enableScrollSpy={true}
                                        scrollSpyDelay={1000}
                                        scrollSpyOnce={true}
                                    />
                                    <span className="text-xl mt-4">Koppen koffie</span>
                                </div>

                                <div className="flex flex-col">
                                    <CountUp
                                        className="text-4xl font-semibold"
                                        end={data.workHours}
                                        duration={5}
                                        enableScrollSpy={true}
                                        scrollSpyDelay={1000}
                                        scrollSpyOnce={true}
                                    />
                                    <span className="text-xl mt-4">Uren werk</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}