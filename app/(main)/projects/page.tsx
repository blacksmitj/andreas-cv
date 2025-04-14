import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { List } from "@/components/projects/list";

const ProjectsPage = () => {
  return (
    <div className="flex flex-col gap-y-10 pt-20 mx-10">
      <Header
        title="My Projects"
        subtitle="Web developer Video | Motion Graphic"
        categories={["cat01", "cat02", "cat03"]}
      />
      <List />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
