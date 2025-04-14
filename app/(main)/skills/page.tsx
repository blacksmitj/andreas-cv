import react from "@/public/images/react.png";
import nextjs from "@/public/images/nextjs.png";
import tailwind from "@/public/images/tailwind.png";
import prisma from "@/public/images/prisma.png";
import shadcn from "@/public/images/shadcnui.png";
import premiere from "@/public/images/premiere.png";
import aftereffect from "@/public/images/aftereffect.png";
import { LatestProject } from "@/components/latest-project";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card } from "@/components/skills/card";

const SkillsPage = () => {
  return (
    <div className="flex gap-5 pt-20 mx-10">
      <div className="flex flex-col gap-y-20 w-2/3">
        <Header title="Skills" subtitle="Technology, skills, and tools" />
        <div className="flex gap-5">
          <div className="w-full relative flex ">
            <div className="flex flex-col gap-8">
              <h4>Web Develop</h4>
              <div className="grid grid-cols-6 gap-4">
                <Card image={react} title={"React Js"} />
                <Card image={nextjs} title={"Next Js"} />
                <Card image={tailwind} title={"Tailwind CSS"} />
                <Card image={prisma} title={"Prisma Js"} />
                <Card image={shadcn} title={"shadcn/ui"} />
              </div>
              <h4>Video | Motion Graphic</h4>
              <div className="grid grid-cols-6 gap-4">
                <Card image={premiere} title={"Premiere Pro"} />
                <Card image={aftereffect} title={"After Effect"} />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      {/* Latest Project */}
      <LatestProject />
    </div>
  );
};

export default SkillsPage;
