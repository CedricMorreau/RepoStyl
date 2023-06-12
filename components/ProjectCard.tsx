import Image from "next/image"
import { urlForImage } from "@/sanity/lib/image"
import Link from "next/link"

export default function ProjectCard(props: any) {

    return (
        <Link href={`/projects/${props.slug}`}>
            <article className="w-full mb-24 border-1 max-w-[400px] border-[#121212]/20 drop-shadow-lg">
                <div className="absolute bottom-0 pb-4 pt-60 px-5 w-full bg-gradient-to-t from-primary-dark/20 text-primary-light">
                    <h2 className="text-5xl pb-6">{props.title}</h2>
                    <h3 className="text-xl font-medium">{props.tech}</h3>
                </div>

                <Image src={urlForImage(props.image).url()} alt="Placeholder_project" width={400} height={400} />
            </article>
        </Link>
    )
}