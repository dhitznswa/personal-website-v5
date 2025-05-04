import AboutMe from "@/components/about-me";
import ContactMe from "@/components/contact-me";
import NotifAlert from "@/components/notif-alert";
import ProfileCard from "@/components/profile-card";
import ProjectSection from "@/components/projects-section";
import ServiceStats from "@/components/service-stats";
import Testimonials from "@/components/testimonials";

export default function Welcome() {
  return (
    <>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="col-span-1">
          <ProfileCard />
        </div>
        <div className="col-span-1 space-y-5">
          <div className="w-full">
            <NotifAlert />
          </div>
          <div className="w-full">
            <ServiceStats />
          </div>
        </div>
      </div>
      <div className="w-full mt-10 pt-10 md:pt-0" id="about">
        <AboutMe />
      </div>
      <div className="w-full mt-10" id="projects">
        <ProjectSection />
      </div>
      <div className="w-full mt-10">
        <Testimonials />
      </div>
      <div className="w-full mt-20">
        <ContactMe />
      </div>
    </>
  );
}
