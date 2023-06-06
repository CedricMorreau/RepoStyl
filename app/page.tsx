import { client } from "@/sanity/lib/client"

import Image from "next/image"
import { urlForImage } from '@/sanity/lib/image'

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

  return (
    <>
      <h1>{data.slug}</h1>

      <Image
                style={{ objectFit: 'cover' }}
                src={urlForImage(data.heroImage).url()}
                alt="PlaceholderLogo"
                width={2400}
                height={2400}
              />
    </>
  )
}
