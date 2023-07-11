"use client"

import { Typewriter } from 'react-simple-typewriter'

type Props = {
    title: string
}

export default function Writer({ title }: Props) {
    return (
        <>
            <div className="h-20 mt-10">
                <div className="text-6xl font-medium leading-[3rem] text-primary-dark md:text-[6rem] pb-4">
                    <Typewriter words={[title]} loop={1} typeSpeed={85} />
                </div>
            </div>
        </>
    )
}