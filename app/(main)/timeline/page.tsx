import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LatestProject } from "@/components/latest-project";
import { EducationTimeline } from "@/components/timeline/education-timeline";
import { WorkTimeline } from "@/components/timeline/work-timeline";

const ExperiencePage = () => {
  return (
    <div className="flex gap-5 pt-20 mx-10">
      <div className="flex flex-col gap-y-10 w-2/3">
        <Header title="Works Experience" subtitle="Journey of works" />
        {/* Work Timeline */}
        <WorkTimeline />
        <Header title="Education" subtitle="Detail of education" />
        <EducationTimeline />
        <Footer />
      </div>
      {/* Latest Project */}
      <LatestProject />
    </div>
  );
};

export default ExperiencePage;
