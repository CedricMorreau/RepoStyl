import { client } from "@/sanity/lib/client"

import DesktopHeader from "@/components/DesktopHeader"
import MobileHeader from "@/components/MobileHeader"
import ProjectCard from "@/components/ProjectCard"
import Writer from "@/components/Typewriter"

type Projects = {
    _id: string;
    cardImage: any;
    title: string;
    slug: string;
    tech: string;
}

export default async function projectOverview() {
    const data: Projects[] = await client.fetch("*[_type =='projects'][]",
        {
            next: {
                revalidate: 60
            }
        }
    )

    return (
        <>
            <div className="absolute h-screen w-screen overflow-hidden">
                <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/4 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A1FF0A]/25 blur-xl" />
            </div>

            <div className="absolute h-screen w-screen overflow-hidden">
                <div className="absolute top-0 right-0 h-80 w-80 translate-x-2/4 -translate-y-1/4 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C3FB4C]/40 blur-lg" />
            </div>

            <div className="absolute h-screen w-screen overflow-hidden">
                <div className="absolute bottom-[30%] left-0 h-96 w-96 -translate-x-3/4 translate-y-2/4 rounded-full  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#BE0AFF]/25 blur-xl" />
            </div>

            <div className="absolute h-screen w-screen overflow-hidden top-[50vh] md:hidden">
                <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-2/4 translate-y-1/6 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#BE0AFF]/10 blur-xl" />
            </div>

            <div className="absolute h-screen w-screen overflow-hidden top-[80vh] md:hidden">
                <div className="absolute bottom-0 left-0 h-80 w-80 -translate-x-2/4 translate-y-2/4 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C3FB4C]/20 blur-lg" />
            </div>

            <div className="relative z-10 m-auto h-full w-9/12 md:w-10/12">
                <MobileHeader />
                <DesktopHeader />

                <Writer title={"Projecten"} />


                <div className='w-full mt-6 md:mt-20 pb-2 md:grid md:grid-cols-2 md:gap-10 max-w-5xl m-auto'>
                    {data.map((project: Projects) => {
                        return (<ProjectCard
                            key={project._id}
                            title={project.title}
                            slug={project.slug}
                            tech={project.tech}
                            image={project.cardImage}
                        />
                        );
                    })}
                </div>

            </div>
        </>
    )
}