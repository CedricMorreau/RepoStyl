import DesktopHeader from "@/components/DesktopHeader";
import MobileHeader from "@/components/MobileHeader";
import ContactForm from "../../components/ContactForm";
import Writer from "@/components/Typewriter";


export default function Contact() {
    return (
      <>
        <div className="absolute h-screen w-screen overflow-hidden">
          <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/4 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A1FF0A]/25 blur-xl" />
        </div>

        <div className="absolute h-screen w-screen overflow-hidden">
          <div className="absolute top-0 right-0 h-80 w-80 translate-x-2/4 -translate-y-1/4 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C3FB4C]/40 blur-lg" />
        </div>

        <div className="absolute h-screen w-screen overflow-hidden">
          <div className="absolute bottom-25 left-0 h-96 w-96 -translate-x-3/4 translate-y-3/4 rounded-full  bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#BE0AFF]/25 blur-xl" />
        </div>

        <div className="absolute h-screen w-screen overflow-hidden">
          <div className="absolute top-5 right-0 h-96 w-96 translate-x-3/4 lg:translate-x-2/4  translate-y-1/5 lg:translate-y-1/6 rounded-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C3FB4C]/30 blur-2xl" />
        </div>

        <div className="m-auto w-9/12 md:w-10/12 md:pt-4 lg:pt-0">
          <MobileHeader />
          <DesktopHeader />

          <div className="flex justify-between">
            <div className="max-w-md lg:max-w-xl">
              <Writer title={"Contact"} />

              <p className="pt-12 pb-6">
                Ready to elevate your online presence? Don&apos;t miss out on
                the opportunity to collaborate. Contact me today to discuss your
                project. Let&apos;s create an impactful digital experience that
                leaves a lasting impression on your audience.
              </p>

              <ContactForm />
            </div>

            <div className="border-l-2 pl-6 h-fit mt-20 hidden lg:block">
              <h2 className="text-2xl mb-4">Direct contact</h2>
              <ul className="flex">
                <li className="mr-4 ml-2">Phone:</li>
                <a href="tel:31617003730">+316 17 00 37 30</a>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
}