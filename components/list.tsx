import { Card } from "@/components/projects/card";

export const List = () => {
  return (
    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
