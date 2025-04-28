import AboutMe from "@/components/about-me";
import NotifAlert from "@/components/notif-alert";
import ProfileCard from "@/components/profile-card";
import ProjectSection from "@/components/projects-section";
import ServiceStats from "@/components/service-stats";

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
      <div className="w-full mt-10">
        <AboutMe />
      </div>
      <div className="w-full mt-10">
        <ProjectSection />
      </div>
    </>
  );
}
