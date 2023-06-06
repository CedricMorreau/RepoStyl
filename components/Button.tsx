import Link from 'next/link'

export default function Button() {
    return (
        <Link href="#">
            <div className='px-16 py-6 bg-[#f9f9f9] drop-shadow-md rounded-full border-2 border-[#121212]/10'>
                <span className='bg-gradient-to-r from-[#BE0AFF] to-[#580AFF] text-primary-dark/0 inline-block bg-clip-text font-semibold text-xl'>Meer</span>
            </div>
        </Link>
    )
}