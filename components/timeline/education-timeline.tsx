import { EducationDetails } from "@/components/timeline/education-details";

export const EducationTimeline = () => {
  return (
    <div className="w-full relative flex ">
      <div className="absolute border border-primary/20 w-[7px] h-full left-3" />
      <ul className="flex flex-col gap-y-6 w-full mx-8">
        {/* work details */}
        <EducationDetails />
      </ul>
    </div>
  );
};
