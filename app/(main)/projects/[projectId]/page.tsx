import Image from "next/image";
import Link from "next/link";

import imageplaceholder from "@/public/images/imageplaceholder.png";

import { LatestProject } from "@/components/latest-project";
import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/footer";

type Props = {
  params: {
    projectId: string;
  };
};

const ProjectIdPage = async ({ params }: Props) => {
  const { projectId } = await params;

  console.log(projectId);

  return (
    <div className="flex gap-5 pt-20 mx-10">
      <div className="flex flex-col gap-y-20 w-2/3">
        <Header title="Iado Quiz" subtitle="Educational Web App" />
        <div className="flex gap-5">
          {/* Work Timeline */}
          <div className="w-full flex flex-col gap-8">
            <Image
              src={imageplaceholder}
              alt="imageplaceholder"
              className="w-full"
            />
            <p>
              Developing a daily reporting feature that allowed users to post,
              view, and export data based on specific dates. Additionally, I
              implemented an admin role to manage user access and permissions.
              Leveraging Next.js, I created a fast and efficient application
              with a seamless user interface, enabling smooth data entry,
              retrieval, and export functionalities.
            </p>
            <p>
              Technology: Next Js, Tailwind CSS, Prisma, Next Auth, Radix UI,
              Postgree
            </p>
            <p>
              Link :
              <Button variant={"link"} asChild>
                <Link href={"/projects"}>iado-quiz.vercel.app</Link>
              </Button>
            </p>
            <p>
              Figma :
              <Button variant={"link"} asChild>
                <Link href={"/projects"}>IADO Quiz</Link>
              </Button>
            </p>
          </div>
          {/* Latest Project */}
        </div>
        <Footer />
      </div>
      <LatestProject />
    </div>
  );
};

export default ProjectIdPage;
