import { Button } from "@/components/ui/button";

type Props = {
  title: string;
  subtitle: string;
  categories?: string[];
};

export const Header = ({ title, subtitle, categories }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xs">{subtitle}</p>
      </div>
      {categories && (
        <div className="flex gap-2">
          {categories.map((category) => (
            <Button key={category} variant={"outline"}>
              {category}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};
