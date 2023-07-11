type Props = {
    buttonText: string
}

export default function Button({buttonText}: Props) {
    return (
        <div className='px-12 py-4 bg-[#f9f9f9] drop-shadow-xs rounded-full border-2 border-[#121212]/10'>
            <span className='bg-gradient-to-r from-[#BE0AFF] to-[#580AFF] text-primary-dark/0 inline-block bg-clip-text font-semibold text-xl'>{buttonText}</span>
        </div>
    )
}