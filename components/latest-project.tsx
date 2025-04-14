import { Card } from "@/components/projects/card";

export const LatestProject = () => {
  return (
    <div className="w-1/3 flex flex-col gap-12 xl:px-10">
      <h3 className="text-2xl font-bold">Latest Project</h3>
      <div className="flex flex-col gap-8">
        <Card />
        <Card />
      </div>
    </div>
  );
};
