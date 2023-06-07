import Image from 'next/image'
import Link from 'next/link'

export default function DesktopHeader() {
    return (
        <div className='hidden md:flex py-5 justify-between items-center'>
            <div className='relative w-44 h-12'>
                <Link href="/">
                        <Image
                            src="/Styllogo.png"
                            style={{ objectFit: "cover" }}
                            fill={true}
                            alt="PlaceholderLogo"
                            className='cursor-pointer'
                        />
                </Link>
            </div>
            <div className='relative font-medium text-lg justify-between text-primary-dark'>
                <Link className='opacity-40 hover:opacity-100 focus:opacity-100 duration-500 mr-5' href="/projects">projecten</Link>
                <Link className='opacity-40 hover:opacity-100 focus:opacity-100 duration-500 mr-5' href="/about">over Styl</Link>
                <Link className='opacity-40 hover:opacity-100 focus:opacity-100 duration-500' href="/contact">contact</Link>
            </div>
        </div>
    )
}