import Image, { StaticImageData } from "next/image";

type props = {
  title: string;
  image: StaticImageData;
};

export const Card = ({ title, image }: props) => {
  return (
    <div className="flex flex-col gap-2 items-center border border-primary/10 hover:border-accent/20 p-2">
      <Image src={image} alt="icon" className="w-full aspect-square" />
      <h5 className="font-bold text-center">{title}</h5>
    </div>
  );
};
