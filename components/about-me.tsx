import { IconCloud } from "./magicui/icon-cloud";
import HeadSection from "./head-section";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "jest",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "python",
];

function TechExperience() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="relative w-full flex items-center justify-center overflow-hidden">
      <IconCloud images={images} />
    </div>
  );
}

export default function AboutMe() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
      <div className="w-full lg:w-2/3">
        <HeadSection
          title="About me"
          highlight="Come on, get to know me now."
        />
        <p className="my-8 lg:w-[80%]">
          Hello, I am Adhitya Nasuwa, a graduate of Vocational High School
          majoring in Computer Network Engineering, I am a proactive individual,
          result-oriented and able to work well in a team or individually.
          Always looking for opportunities to learn and grow, and ready to
          provide valuable contributions to the team.
        </p>
      </div>
      <div className="w-full lg:w-1/3 -mt-10 lg:mt-0">
        <TechExperience />
      </div>
    </div>
  );
}
